const addFormVisibilityFilter = (state = true, action) => {
  switch (action.type) {
    case 'SHOW_ADD_FORM_VISIBILITY':
      return action.isVisible
    default:
      return state
  }
}

export default addFormVisibilityFilter