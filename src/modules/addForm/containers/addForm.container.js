import { connect } from 'react-redux';
import { addRecord } from '../../../actions';
import AddForm from '../components/addForm.component.js';

const mapStateToProps = (state) => {
  return {
    records: state.records,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (record) => {
      dispatch(addRecord(record))
    }
  }
}

const AddFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddForm);

export default AddFormContainer;