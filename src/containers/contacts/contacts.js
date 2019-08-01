import { connect } from 'react-redux'
import { deleteRecord } from '../../actions'
import RecordsList from '../../components/recordsList/recordsList'

const mapStateToProps = (state) => {
  return {
    records: state.records
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteRecord(id))
    }
  }
}

const Contacts = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordsList)

export default Contacts