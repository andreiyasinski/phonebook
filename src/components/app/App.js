import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Contacts from '../../containers/contacts/contacts'
import AddContactForm from '../../containers/addContactForm/addContactForm'
import AddContactButton from '../../containers/addContactButton/addContactButton'

function App({ isVisible }) {
  return (
    <div className="App">
      { isVisible ? <AddContactForm /> : null}
      <AddContactButton />
      <Contacts />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.addFormVisibilityFilter
  }
}

export default connect(mapStateToProps)(App);
