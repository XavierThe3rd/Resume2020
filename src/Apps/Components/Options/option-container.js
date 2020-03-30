import { connect } from 'react-redux'
import Option from './options.jsx'
import { setCursor } from '../../../actions/globals'

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = {
  setCursor: setCursor
}

export default connect(mapStateToProps, mapDispatchToProps)(Option)
