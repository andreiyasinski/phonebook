import React from 'react'
// import { connect } from 'react-redux'
// import { setAddFormVisibilityFilter } from '../../../actions'

let AddContactButton = ({ changeFormVisible }) => {
  return (
    <button
      onClick={changeFormVisible}
      type="button"
    >
      Add Contact
    </button>  
  )
}

export default AddContactButton