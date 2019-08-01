import React from 'react';
import RecordItem from '../recordItem/recordItem';
import styles from './recordsList.module.css';
import PropTypes from 'prop-types';

const RecordsList = ({ records, onDeleteClick }) => (
  <table className={styles.container}>
    <thead>
      <tr className={styles.titleWrapper}>
        <th className={styles.title}>Name</th>
        <th className={styles.title}>Phone number</th>
        <th className={styles.title}>Organization</th>
        <th className={styles.title}>Creation date</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {records.map(record => {
        return (
          <RecordItem
          key={record.id}
          {...record}
          onDeleteClick={onDeleteClick}
        />
        )
      })}
    </tbody> 
  </table >
)

RecordsList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    organization: PropTypes.string,
    creationDate: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default RecordsList