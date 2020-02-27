/*
** React Component: NoteList
** Purpose: Support behavior to display all notes in the system with additional support for mark down
*/

import React, { Component } from "react";
import * as firebase from "firebase";
import EditNotesForm from "./EditNotesForm";
import NoteMarkDown from "./NoteMarkDown";
import Truncate from "react-truncate";


export class NoteList extends Component {
         
  constructor(props) {
    super(props);

    this.db = firebase.database();
    this.state = {
      notes: this.props.notes,
      search: ""
    };
  }

  onRemoveNote = (id) => {
    this.db.ref("notes")
        .child(id).remove();

    let notes = this.state.notes.filter(item => item.id != id)
    this.setState({ 
      notes: notes 
    });
  }

  onSearchChange = (evt) => {
    let searchValue = evt.target.value;
    let notes = this.props.notes.filter(
      note => note.title.includes(searchValue) || note.note.includes(searchValue)
    );

    this.setState({
      notes: notes,
      search: searchValue
    });
  }
  
  onKeyPressed = (event) => {
    if (event.key === "Enter") {
      if(this.state.notes.length == 0) {
        let notes = []
        let newNote = { 
          id: 0, 
          title: event.target.value,
          note: ''
        }
        
        notes.push(newNote);

        this.db.ref("notes")
            .push(newNote);
        
        this.setState({
          notes: notes
        });
      }
    }
  }

  render() {
    return (
      <div>
        <section className="searchform">
          <div className="ui big icon input">
            <input
              type="text"
              value={this.state.search}
              onChange={evt => this.onSearchChange(evt, "search")}
              onKeyPress={this.onKeyPressed}
              placeholder="Search Notes..."
            />
          </div>
        </section>

        <section className="notes">
          {this.state.notes.map(note => (
            <div className="note" key={note.id}>
              <div className="note-title">
                <h3>{note.title}</h3>
                <div
                  className="remove"
                  onClick={() => this.onRemoveNote(note.id)}
                >
                  x
                </div>
              </div>
              <div className="note-content">
                <Truncate lines={1} >
                  {note.note}
                </Truncate>
              </div>
              <div className="note-title">
                <EditNotesForm
                  id={note.id}
                  title={note.title}
                  note={note.note}
                />
                <NoteMarkDown note={note.note}/>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default NoteList;
