import React from 'react'
import { connect } from 'react-redux'
import { setAddFormVisibilityFilter } from '../../actions'

let AddContactButton = ({ dispatch }) => {
  const handleClick = (e) => {
    dispatch(setAddFormVisibilityFilter(false))
  }
  return (
    <button
      onClick={handleClick}
      type="button"
    >
      Add Contact
    </button>  
  )
}

export default connect()(AddContactButton)