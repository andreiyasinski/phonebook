const records = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECORD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone,
          organization: action.organization,
          creationDate: action.creationDate,
        }
      ]
    default:
      return state
  }
}

export default records