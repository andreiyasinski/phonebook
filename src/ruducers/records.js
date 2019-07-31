const x = [
  {
  id: 1,
  name: 'name 1',
  phone: 'phone 1',
  organization: 'organization 1',
  creationDate: 'creationDate 1'
},
{
  id: 2,
  name: 'name 2',
  phone: 'phone 2',
  organization: 'organization 2',
  creationDate: 'creationDate 2'
},
{
  id: 3,
  name: 'name 3',
  phone: 'phone 3',
  organization: 'organization 3',
  creationDate: 'creationDate 3'
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
    default:
      return state
  }
}

export default records


