/*
** React Component: EditNotesForms
** Purpose: Support behavior to edit existing notes in the application
*/

import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Header, Icon, Modal } from "semantic-ui-react";


export class EditNotesForm extends Component {
         
constructor(props) {
    super(props);

    this.db = firebase.database();
    this.state = {
      id: this.props.id,
      title: this.props.title,
      note: this.props.note
    };
  }

  onFieldChange= (evt, key) => {
    this.setState({
        [key]: evt.target.value
    });
  }

  onNoteUpdate = () => {
    let updatedNote = {
      title: this.state.title,
      note: this.state.note
    };

    this.db.ref("notes/" + this.state.id)
        .set(updatedNote);
  }

  render() {
    return (
      <Modal trigger={<Button>Edit</Button>} basic size="small">
      
        <form class="ui form">
            <div class="field">
              <input
                type="text"
                value={this.state.title}
                onChange={evt => this.onFieldChange(evt, "title")}
              />
            </div>
            <div class="field">
              <textarea
                value={this.state.note}
                onChange={evt => this.onFieldChange(evt, "note")}
                rows="3"
              />
              <div class="field"></div>
            </div>
          </form>
          <Modal.Actions>
            <Button color="green" inverted onClick={evt => this.onNoteUpdate()}>
              <Icon name="checkmark" />Update
            </Button>
          </Modal.Actions>
      </Modal>
    );
  }
}

export default EditNotesForm

