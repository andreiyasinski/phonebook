import React from 'react';
import RecordItem from '../recordItem/recordItem';
import styles from './recordsList.module.css';

const RecordsList = ({ records }) => (
  <ul className={styles.container}>
    {records.map(record => {
      return (
        <RecordItem
        key={record.id}
        {...record}
      />
      )
    })}
  </ul>
)

export default RecordsList