import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Header, Icon, Modal } from "semantic-ui-react";


export class AddNotesForm extends Component {
  
  constructor() {
    super();

    this.db = firebase.database();
    this.state = {
      title: '',
      note: ''
    };
  }

  onFieldChange = (evt, key) => {
    this.setState({
      [key]: evt.target.value
    });
  }

  onNoteCreate = () => {
    if(this.state.title !== '' || this.state.note !== ''){
      this.db.ref("notes")
        .push({
          title: this.state.title,
          note: this.state.note
      });
    }          
  }

  render() {
    return (
      <Modal
        trigger={
          <button className="huge ui icon button addNoteBtn">
            <i className="sticky note outline icon"></i>
          </button>
        }
        basic
        size="large"
      >
        <section>
        <h3>Add New Note</h3>
          <form class="ui form">
            <div class="field">
              <input
                type="text"
                value={this.state.title}
                onChange={evt => this.onFieldChange(evt, "title")}
                placeholder="Enter Title"
              />
            </div>
            <div class="field">
              <textarea
                value={this.state.note}
                onChange={evt => this.onFieldChange(evt, "note")}
                placeholder="Enter Note"
                rows="3"
              />
              <div class="field"></div>
            </div>
          </form>
          <Modal.Actions>
            <Button color="green" inverted onClick={evt => this.onNoteCreate()} >
              <Icon name="checkmark" /> Save
            </Button>
          </Modal.Actions>
        </section>
      </Modal>
    );
  }
}

export default AddNotesForm;


