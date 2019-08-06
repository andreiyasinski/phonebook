import { connect } from 'react-redux';
import { editRecord } from '../../../actions';
import EditForm from '../components/editForm.component.js';

const mapStateToProps = (state) => {
  return {
    records: state.records,
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