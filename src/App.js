import React from 'react';
import * as firebase from 'firebase';

import Header from './components/Header';
import NotesForm from "./components/NotesForm";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NotesForm />
      </main>
    </div>
  );
}

export default App;
