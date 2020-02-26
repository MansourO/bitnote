import React, { Component } from "react";
import * as firebase from "firebase";
import EditNotesForm from "./EditNotesForm";


export class Notes extends Component {
         constructor(props) {
           super(props);

           this.state = {
             notes: this.props.notes,
             search: ""
           };

           this.filterNotes = this.filterNotes.bind(this);

         }

         removeNote = (id) => {
           firebase
             .database()
             .ref("notes")
             .child(id)
             .remove();

           
             let notes = this.state.notes.filter(item => item.id != id)

             this.setState({
               notes: notes
             });

         }

         onSearchChangeHandler(evt, key) {
           this.setState({
             [key]: evt.target.value
           });

           this.filterNotes(evt.target.value);
         }

         filterNotes(searchValue) {
           let notes = this.props.notes.filter(
             note =>
               note.title.includes(searchValue) ||
               note.note.includes(searchValue)
           );

           this.setState({
             notes: notes
           });
         }

         keyPressed = (event) => {
           if (event.key === "Enter") {

              console.log(event);

              if(this.state.notes.length == 0){

                let newNote = {
                  id: 0,
                  title: event.target.value,
                  note: ''
                }

                let notes = []
                notes.push(newNote);

                firebase
                  .database()
                  .ref("notes")
                  .push(newNote);


                   this.setState({
                     notes: notes
                   });
              }
           }
         }

         render() {
           return (
             //Search Bar
             <section className="notes-wrapper">
               <section className="searchform">
                 <div className="ui big icon input">
                   <input
                     type="text"
                     id="search-bar"
                     name="search-bar"
                     value={this.state.search}
                     onChange={evt => this.onSearchChangeHandler(evt, "search")}
                     onKeyPress={this.keyPressed}
                     placeholder="Search Notes..."
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
                     <div className="note-title">
                       <EditNotesForm
                         id={note.id}
                         title={note.title}
                         note={note.note}
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </section>
           );
         }
       }

export default Notes;
