import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Header, Icon, Modal } from "semantic-ui-react";


export class EditNotesForm extends Component {
         
        constructor(props) {
           super(props);
           this.state = {
             id: this.props.id,
             title: this.props.title,
             note: this.props.note
           };


         }
         onChangeHandler(evt, key) {
           
          this.setState({
             [key]: evt.target.value
           });

         }

         updateNote(){
    

            let updatedNote = {
              title: this.state.title,
              note: this.state.note
            };

             firebase
               .database()
               .ref("notes/" + this.state.id)
               .set(updatedNote);
         }

         render() {
           return (
             <Modal trigger={<Button>Edit</Button>} basic size="small">
               <section className="noteform">
                 <div className="form-group">
                   <label htmlFor="noteform-title">Title</label>
                   <input
                     type="text"
                     id="noteform-title"
                     name="noteform-title"
                     value={this.state.title}
                     onChange={evt => this.onChangeHandler(evt, "title")}
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="noteform-noteform">Note</label>
                   <textarea
                     name="noteform-note"
                     id="noteform-note"
                     value={this.state.note}
                     onChange={evt => this.onChangeHandler(evt, "note")}
                   />
                 </div>
                 <Modal.Actions>
                   <Button
                     color="green"
                     inverted
                     onClick={evt => this.updateNote()}
                   >
                     <Icon name="checkmark" /> Save
                   </Button>
                 </Modal.Actions>
               </section>
             </Modal>
           );
         }
       }



export default EditNotesForm

