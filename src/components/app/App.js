import React from 'react';
import './App.css';
import Contacts from '../../containers/contacts/contacts'
import AddContact from '../../containers/addContact/addContact'

function App() {
  return (
    <div className="App">
      <AddContact />
      <Contacts />
    </div>
  );
}

export default App;
