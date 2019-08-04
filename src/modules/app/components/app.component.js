import React, { Component } from 'react';
import styles from './app.module.css';
import RecordsList from '../../recordsList/containers/recordsList.container';
import AddForm from '../../addForm/containers/addForm.container';
import Header from '../../header/components/header.component';

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
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header changeFormVisible={this.changeFormVisible} />
          { this.state.isVisible ? <AddForm changeFormVisible={this.changeFormVisible } /> : null}
          <div className={styles.content}>
            <RecordsList />
          </div>
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