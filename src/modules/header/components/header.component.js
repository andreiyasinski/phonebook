import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';

let Header = ({ changeFormVisible }) => {
  return (
    <header className={styles.container}>
      <p className={styles.title}>Phone Book</p>
      <button
      className={styles.button}
      onClick={changeFormVisible}
      type="button"
    >
      <span className={styles.icon}>
        +
      </span>
      Add Contact
      </button> 
    </header>
  )
}

Header.propTypes = {
  changeFormVisible: PropTypes.func.isRequired
}


export default Header