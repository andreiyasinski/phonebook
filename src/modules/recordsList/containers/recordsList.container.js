import { connect } from 'react-redux';
import { deleteRecord, setEditingRecord } from '../../../actions';
import RecordsList from '../../recordsList/components/recordsList.component';

const mapStateToProps = (state) => {
  return {
    records: state.records,
    editingRecord: state.editingRecord,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteRecord(id))
    },
    onEditClick: (id) => {
      dispatch(setEditingRecord(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordsList)