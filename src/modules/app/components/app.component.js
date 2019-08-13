import React, { Component } from 'react';
import styles from './app.module.css';
import RecordsList from '../../recordsList/containers/recordsList.container';
import AddForm from '../../addForm/containers/addForm.container';
import EditForm from '../../editForm/containers/editForm.container';
import Header from '../../header/components/header.component';

export default class App extends Component {
  state = {
    isVisible: false,
    isEditFormVisible: false,
    editingRecord: {}
  }

  changeFormVisible = (isFormVisble) => {
    this.setState({
      isVisible: isFormVisble
    })
  }

  changeEditFormVisible = (isFormVisble) => {
    this.setState({
      isEditFormVisible: isFormVisble
    })
  }

  setEditingRecord = (record) => {
    this.setState({
      editingRecord: record,
    })
    this.changeEditFormVisible(true);
  }

  render() {
    const { isVisible, isEditFormVisible, editingRecord } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header changeFormVisible={this.changeFormVisible} />
          {isVisible && <AddForm changeFormVisible={this.changeFormVisible} />}
          {isEditFormVisible && <EditForm changeEditFormVisible={this.changeEditFormVisible} editingRecord={editingRecord} />
          }
          <div className={styles.content}>
            <RecordsList setEditingRecord={this.setEditingRecord}  changeEditFormVisible={this.changeEditFormVisible} />
          </div>
        </div>
      </div>
    );
  }
}
