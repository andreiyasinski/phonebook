import React from 'react'
import styles from './recordItem.module.css';
import deleteIcon from '../../assets/trash-alt-regular.svg';

const RecordItem = ({ id, name, phone, organization, creationDate }) => (
  <li className={styles.container}>
    <div className={styles.recordItem}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.phone}>
        {phone}
      </div>
      <div className={styles.organization}>
        {organization}
      </div>
      <div className={styles.creationDate}>
        {creationDate}
      </div>
    </div>
    <img src={deleteIcon} className={styles.deleteIcon} alt="delete" />
  </li>
)

export default RecordItem