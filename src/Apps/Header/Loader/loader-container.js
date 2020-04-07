import { connect } from 'react-redux'
import Loader from './loader.jsx'
import { setLoad, setLClass } from '../../../actions/page-switch'
import { setOpacHeading } from '../../../actions/heading'
import { setCursor, smoothScroll } from '../../../actions/globals'
import { setMove, setOpacNav } from '../../../actions/navigation.js'

const mapStateToProps = state => {
  return {
    load: state.pageSwitch.load,
    linkclass: state.pageSwitch.linkclass,
    linkData: state.pageSwitch.linkData,
    smoothScroll: smoothScroll
  }
}

const mapDispatchToProps = {
  setLoad: setLoad,
  setLClass: setLClass,
  setOpacHeading: setOpacHeading,
  setCursor: setCursor,
  setMove: setMove,
  setOpacNav: setOpacNav
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
