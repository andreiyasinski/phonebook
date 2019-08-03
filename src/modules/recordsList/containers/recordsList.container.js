import { connect } from 'react-redux'
import { deleteRecord } from '../../../actions'
import RecordsList from '../../recordsList/components/recordsList.component'

const mapStateToProps = (state) => {
  return {
    records: state.records,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteRecord(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordsList)