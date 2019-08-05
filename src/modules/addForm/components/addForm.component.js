import React from 'react';
import styles from './addForm.module.css';
import PropTypes from 'prop-types';

const AddForm = ({ onAddClick, changeFormVisible }) => {
  let name = React.createRef();
  let phone = React.createRef();
  let organization = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name.value) return;
    // (() => addRecord({
    //   name: name.value,
    //   phone: phone.value,
    //   organization: organization.value
    // }))()
    onAddClick({
      name: name.value,
      phone: phone.value,
      organization: organization.value
    })
    changeFormVisible();
    name.value = '';
    phone.value = '';
    organization.value = '';
  }

  const hideForm = (e) => {
    if (e.currentTarget === e.target) {
      changeFormVisible()
    }
  }

  return (
    <div className={styles.container} onClick={hideForm} >
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:<br />
          <input 
            className={styles.input}
            ref={node => name = node} 
          />
        </label>
        <label>
          Phone number:<br />
          <input
            className={styles.input}
            ref={node => phone = node}
          />
        </label>
        <label>
          Organization<br />
          <input
            className={styles.input}
            ref={node => organization = node}
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
  )
}

AddForm.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  changeFormVisible: PropTypes.func.isRequired
}

export default AddForm