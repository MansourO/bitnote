import React, { Component } from "react";
import * as firebase from "firebase";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";

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

    //Add Note
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

    //Remove Note Action
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
          <Notes notes={this.state.notes} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
