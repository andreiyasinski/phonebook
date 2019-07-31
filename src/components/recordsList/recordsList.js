import React from 'react'
import RecordItem from '../recordItem/recordItem'

const RecordsList = ({ records }) => (
  <ul>
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