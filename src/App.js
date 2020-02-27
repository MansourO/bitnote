import React, { Component } from "react";
import * as firebase from "firebase";

import Header from "./components/Header";
import NoteList from "./components/NoteList";
import AddNotesForm from "./components/AddNotesForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.db = firebase.database()
    this.listenForChange();
  }

  listenForChange() {

    //Detect addition of new note
    this.db.ref("notes").on("child_added", snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note
      };

      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });

    //detect removal of note
    this.db.ref("notes").on("child_removed", snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key);

      this.setState({
        notes: notes
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div>
            <NoteList notes={this.state.notes} />
          </div>
          <div align="right">
            <AddNotesForm />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
