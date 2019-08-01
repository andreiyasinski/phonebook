import id from 'uuid/v4';

export const addRecord = (record) => {
  return {
    type: 'ADD_RECORD',
    id: id(),
    name: record.name,
    phone: record.phone,
    organization: record.organization,
    creationDate: Date.now(),
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

export const setFormVisibilityFilter  = (filter) => {
  return {
    type: 'SET_FORM_VISIBILITY_FILTER',
    filter
  }
}