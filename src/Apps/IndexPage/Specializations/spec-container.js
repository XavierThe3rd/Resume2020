import { connect } from 'react-redux'
import Specializations from './Specializations.jsx'

const mapStateToProps = state => {
  return {
    spec: state.special.specData
  }
}

export default connect(mapStateToProps)(Specializations)
