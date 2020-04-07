import { connect } from 'react-redux'
import Navigation from './navigation.jsx'
import { setMove, setOpacNav } from '../../../actions/navigation.js'
import { setBtNav } from '../../../actions/globals.js'
import { setDist } from '../../../actions/header'

const mapStateToProps = state => {
  return {
    dist: state.header.dist,
    move: state.navigation.move,
    opac: state.navigation.opacNav,
    btNav: state.globals.btNav
  }
}

const mapDispatchToProps = {
  setDist: setDist,
  setMove: setMove,
  setOpacNav: setOpacNav,
  setBtNav: setBtNav
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
