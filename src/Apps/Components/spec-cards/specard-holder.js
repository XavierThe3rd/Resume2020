import { connect } from 'react-redux'
import SpecCards from './SpecCards.jsx'
import { setMobile } from '../../../actions/mobile'

const mapStateToProps = state => {
  return {
    mobile: state.mobile.mobileState
  }
}
const mapDispatchToProps = {
  setMobile: setMobile
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecCards)
