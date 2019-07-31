import { connect } from 'react-redux'
import RecordsList from '../../components/recordsList/recordsList'

const mapStateToProps = (state) => {
  return {
    records: state.records
  }
}

const Contacts = connect(
  mapStateToProps
)(RecordsList)

export default Contacts