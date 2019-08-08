import id from 'uuid/v4';
import { format } from 'date-fns';

export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';

export const addRecord = (record) => {
  return {
    type: ADD_RECORD,
    payload: {
      id: id(),
      name: record.name,
      phone: record.phone,
      organization: record.organization,
      creationDate: format(new Date(), 'MM:DD:YYYY'),
    }
  }
}

export const deleteRecord = (id) => {
  return {
    type: DELETE_RECORD,
    payload: {
      id
    }
  }
}

export const editRecord = (record) => {
  return {
    type: EDIT_RECORD,
    payload: {
      id: record.id,
      name: record.name,
      phone: record.phone,
      organization: record.organization,
      creationDate: record.creationDate
    }
  }
}
