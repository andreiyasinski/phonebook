import { connect } from 'react-redux';
import { editRecord } from '../../../actions';
import EditForm from '../components/editForm.component.js';

const mapStateToProps = (state) => {
  return {
    records: state.records,
    editingRecord: state.records.filter(record => record.id === state.editingRecord)[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (record) => {
      dispatch(editRecord(record))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)