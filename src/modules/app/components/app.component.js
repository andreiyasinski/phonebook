import React, { Component } from 'react';
// import { connect } from 'react-redux';
import RecordsList from '../../recordsList/containers/recordsList.container';
import AddContactForm from '../../addContactForm/containers/addContactForm.container';
import AddContactButton from '../../addContactButton/components/addContactButton.component';

export default class App extends Component {
  state = {
    isVisible: false
  }

  changeFormVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <div>
        <div>
         { this.state.isVisible ? <AddContactForm changeFormVisible={this.changeFormVisible} /> : null}
         <AddContactButton changeFormVisible={this.changeFormVisible} />
         <RecordsList />
       </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//     isVisible: state.addFormVisibilityFilter
//   }
// }

// export default connect(mapStateToProps)(App);
// export default App;