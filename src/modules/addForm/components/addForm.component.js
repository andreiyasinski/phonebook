import React, { Component } from 'react';
import styles from './addForm.module.css';
import PropTypes from 'prop-types';

class AddForm extends Component {
  state = {
    name: '',
    phone: '',
    organization: '',
  };
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone, organization } = this.state;
    if(!this.state.name) return;
    this.props.onAddClick({name, phone, organization});
    this.props.changeFormVisible();
    this.setState({
      name: '',
      phone: '',
      organization: ''
    });
  };

  hideForm = e => {
    if (e.currentTarget === e.target) {
      this.props.changeFormVisible();
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
              Add Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AddForm.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  changeFormVisible: PropTypes.func.isRequired
};

export default AddForm;