import React from 'react';
import RecordItem from '../recordItem/recordItem';
import styles from './recordsList.module.css';

const RecordsList = ({ records, onDeleteClick }) => (
  <table className={styles.container}>
    <tr className={styles.titleWrapper}>
      <th className={styles.title}>Name</th>
      <th className={styles.title}>Phone number</th>
      <th className={styles.title}>Organization</th>
      <th className={styles.title}>Creation date</th>
      <th>&nbsp;</th>
    </tr>
    {records.map(record => {
      return (
        <RecordItem
        key={record.id}
        {...record}
        onDeleteClick={onDeleteClick}
      />
      )
    })}
  </table >
)

export default RecordsList