import React, { Component } from 'react';
import styles from './editForm.module.css';
import PropTypes from 'prop-types';

class EditForm extends Component {
  state = {
    id: '',
    name: '',
    phone: '',
    organization: '',
    creationDate: ''
  };

  componentDidMount() {
    const {id, name, phone, organization, creationDate} = this.props.editingRecord;
    this.setState({
      id,
      name,
      phone,
      organization,
      creationDate
    })
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.name) return;
    this.props.onEditClick(this.state);
    this.props.changeEditFormVisible();
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
      this.props.changeEditFormVisible();
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


// import React from 'react';
// import styles from './addForm.module.css';
// import PropTypes from 'prop-types';

// const AddForm = ({ onAddClick, changeFormVisible }) => {
//   let name = React.createRef();
//   let phone = React.createRef();
//   let organization = React.createRef();
  
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if(!name.value) return;
//     onAddClick({
//       name: name.value,
//       phone: phone.value,
//       organization: organization.value
//     })
//     changeFormVisible();
//     name.value = '';
//     phone.value = '';
//     organization.value = '';
//   }

//   const hideForm = (e) => {
//     if (e.currentTarget === e.target) {
//       changeFormVisible()
//     }
//   }

//   return (
//     <div className={styles.container} onClick={hideForm} >
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label>
//           Name:<br />
//           <input 
//             className={styles.input}
//             ref={node => name = node} 
//           />
//         </label>
//         <label>
//           Phone number:<br />
//           <input
//             className={styles.input}
//             ref={node => phone = node}
//           />
//         </label>
//         <label>
//           Organization<br />
//           <input
//             className={styles.input}
//             ref={node => organization = node}
//           />
//         </label>
//         <button
//           type="submit"
//           className={styles.button}
//         >
//           Add Contact
//         </button>
//       </form>
//     </div>
//   )
// }

// AddForm.propTypes = {
//   onAddClick: PropTypes.func.isRequired,
//   changeFormVisible: PropTypes.func.isRequired
// }

// export default AddForm