import { connect } from 'react-redux'
import Navigation from './navigation.jsx'
//import { setNav, setClass } from '../../../actions/navigation.js'
import { setMobile } from '../../../actions/mobile'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    mobileState: state.mobile.mobileState
    //htag: state.navigation.htag
  }
}

const mapDispatchToProps = {
  setMobile: setMobile
  //setHtag: setHtag
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
