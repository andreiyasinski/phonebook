import React from 'react'
import styles from './recordItem.module.css';
import deleteIcon from '../../assets/trash-alt-regular.svg';

const RecordItem = ({ id, name, phone, organization, creationDate, onDeleteClick }) => (
  <tr className={styles.container}>
    <td className={styles.name}>
      {name}
    </td>
    <td className={styles.phone}>
      {phone}
    </td>
    <td className={styles.organization}>
      {organization}
    </td>
    <td className={styles.creationDate}>
      {creationDate}
    </td>
    <td className={styles.creationDate}>
      <img onClick={() => onDeleteClick(id)} src={deleteIcon} className={styles.deleteIcon} alt="delete" />
    </td>
  </tr>
)

export default RecordItem