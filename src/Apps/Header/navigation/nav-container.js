import { connect } from 'react-redux'
import Navigation from './navigation.jsx'
import { setMove, setOpacNav } from '../../../actions/navigation.js'
import { setBtNav } from '../../../actions/globals.js'
import { setDist } from '../../../actions/header'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    mobileState: state.mobile.mobileState,
    dist: state.header.dist,
    move: state.navigation.move,
    opac: state.navigation.opacNav,
    btNav: state.globals.btNav
  }
}

const mapDispatchToProps = {
  setDist: setDist,
  setMove: setMove,
  setOpac: setOpacNav,
  setBtNav: setBtNav
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
