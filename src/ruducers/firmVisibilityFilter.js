const formVisibilityFilter = (state = 'SHOW', action) => {
  switch (action.type) {
    case 'SET_FORM_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default formVisibilityFilter