import React from 'react'
import { connect } from 'react-redux'
import { addRecord } from '../../actions'

const AddContactButton = ({ dispatch }) => {
  let name = React.createRef();
  let phone = React.createRef();
  let organization = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name.value) return;
    dispatch(addRecord({
      name: name.value,
      phone: phone.value,
      organization: organization.value
    }))
    name.value = ''
    phone.value = ''
    organization.value = ''
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input ref={node => {
          name = node
        }} />
        <input ref={node => {
          phone = node
        }} />
        <input ref={node => {
          organization = node
        }} />
        <button type="submit">
          Add Contact
        </button>
      </form>
    </div>
  )
}

export default connect()(AddContactButton)