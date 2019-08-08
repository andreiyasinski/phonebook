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

  changeFormVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  changeEditFormVisible = () => {
    this.setState({
      isEditFormVisible: !this.state.isEditFormVisible
    })
  }

  setEditingRecord = (record) => {
    this.setState({
      editingRecord: record,
      isEditFormVisible: !this.state.isEditFormVisible,
    })
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
            <RecordsList setEditingRecord={this.setEditingRecord} />
          </div>
        </div>
      </div>
    );
  }
}
