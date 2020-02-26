import React from 'react';
import AddNotesForm from "./AddNotesForm";


const Header = props => (
  <header className="header">

      <div className="title">BitNote</div>
    
    <div align="right">
      <AddNotesForm />
    </div>
  </header>
);

export default Header;