import { connect } from 'react-redux';
import { addRecord } from '../../../actions';
import AddContactForm from '../components/addContactForm.component.js';

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

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm)