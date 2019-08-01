const x = [
  {
  id: '1',
  name: 'name 1',
  phone: 'phone 1',
  organization: 'organization 1',
  creationDate: 'Date'
},
{
  id: '2',
  name: 'name 2',
  phone: 'phone 2',
  organization: 'organization 2',
  creationDate: 'Date'
},
{
  id: '3',
  name: 'name 3',
  phone: 'phone 3',
  organization: 'organization 3',
  creationDate: 'Date'
}
]


const records = (state = [...x], action) => {
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
    case 'DELETE_RECORD':
      return state.filter(record => record.id !== action.id)
    default:
      return state
  }
}

export default records


