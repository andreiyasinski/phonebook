import React from 'react';
import PropTypes from 'prop-types';
import styles from './recordItem.module.css';
import deleteIcon from '../../../resources/svg/delete_icon.svg';
import editIcon from '../../../resources/svg/edit_icon.svg';

const RecordItem = ({id, name, phone, organization, creationDate, onDeleteClick, setEditingRecord}) => (
  <tr className={styles.container}>
    <td className={styles.name}>{name}</td>
    <td className={styles.phone}>{phone}</td>
    <td className={styles.organization}>{organization}</td>
    <td className={styles.creationDate}>{creationDate}</td>
    <td className={styles.options}>
      <img
        onClick={() => setEditingRecord({id, name, phone, organization, creationDate})}
        src={editIcon}
        className={styles.editIcon}
        alt="edit"
      />
      <img 
        onClick={() => onDeleteClick(id)}
        src={deleteIcon}
        className={styles.deleteIcon}
        alt="delete" 
      />
    </td>
  </tr>
)

RecordItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  organization: PropTypes.string,
  creationDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default RecordItem