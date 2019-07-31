const records = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECORD':
      return [
        ...state,
      ]
    default:
      return state
  }
}

export default records