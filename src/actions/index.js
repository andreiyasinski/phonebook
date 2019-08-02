import id from 'uuid/v4';

export const addRecord = (record) => {
  return {
    type: 'ADD_RECORD',
    id: id(),
    name: record.name,
    phone: record.phone,
    organization: record.organization,
    creationDate: `${new Date().getDate().toString().padStart(2,'0')}:${(new Date().getMonth() + 1).toString().padStart(2,'0') }:${new Date().getFullYear()}`,
  }
}

export const deleteRecord = (id) => {
  return {
    type: 'DELETE_RECORD',
    id
  }
}

export const editRecord = (id) => {
  return {
    type: 'EDIT_RECORD',
    id
  }
}

export const setAddFormVisibilityFilter  = (isVisible) => {
  return {
    type: 'SHOW_ADD_FORM_VISIBILITY',
    isVisible
  }
}