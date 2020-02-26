import React, { Component } from "react";
import * as firebase from "firebase";


export class Notes extends Component {
         constructor(props) {
           super(props);

           this.state = {
             notes: this.props.notes,
             search: ""
           };

           this.filterNotes = this.filterNotes.bind(this)
         }

         removeNote(id) {
           firebase
             .database()
             .ref("notes")
             .child(id)
             .remove();
         }

          onSearchChangeHandler(evt, key) {
            this.setState({
              [key]: evt.target.value
            });

            this.filterNotes(evt.target.value);
          }

         filterNotes(searchValue){
           
            console.log(searchValue);

            let notes = this.props.notes.filter(note => 
              note.title.includes(searchValue)
            )

            this.setState({
              notes: notes
            });
         }

         render() {
           return (
             <section className="notes-wrapper">
               <h3>Notes</h3>
               <section className="searchform">
                 <div className="form-group">
                   <input
                     type="text"
                     id="search-bar"
                     name="search-bar"
                     value={this.state.search}
                     onChange={evt => this.onSearchChangeHandler(evt, "search")}
                   />
                 </div>
               </section>
               <div className="notes">
                 {this.state.notes.map(note => (
                   <div className="note" key={note.id}>
                     <div className="note-title">
                       <h3>{note.title}</h3>
                       <div
                         className="remove"
                         onClick={() => this.removeNote(note.id)}
                       >
                         x
                       </div>
                     </div>
                     <div className="note-content">
                       <p>{note.note}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </section>
           );
         }
       }

export default Notes;
