import React, { Component } from 'react';
import styles from './editForm.module.css';
import PropTypes from 'prop-types';

class EditForm extends Component {
  state = {
    id: this.props.editingRecord.id,
    name: this.props.editingRecord.name,
    phone: this.props.editingRecord.phone,
    organization: this.props.editingRecord.organization,
    creationDate: this.props.editingRecord.creationDate
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, name, phone, organization, creationDate } = this.state;
    if(!this.state.name) return;
    this.props.onEditClick({id, name, phone, organization, creationDate});
    this.props.changeEditFormVisible(false);
    this.setState({
      id: '',
      name: '',
      phone: '',
      organization: '',
      creationdate: ''
    });
  };

  hideForm = e => {
    if (e.currentTarget === e.target) {
      this.props.changeEditFormVisible(false);
    }
  };

  render() {
    return (
      <div>
        <div className={styles.container} onClick={this.hideForm} >
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <label>
              Name:
              <input 
                className={styles.input}
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Phone number:
              <input
                className={styles.input}
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Organization:
              <input
                className={styles.input}
                value={this.state.organization}
                name="organization"
                onChange={this.handleChange}
              />
            </label>
            <button
              type="submit"
              className={styles.button}
            >
              Edit Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

EditForm.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  changeEditFormVisible: PropTypes.func.isRequired,
  editingRecord: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    organization: PropTypes.string,
    creationDate: PropTypes.string.isRequired,
  }),
};

export default EditForm;