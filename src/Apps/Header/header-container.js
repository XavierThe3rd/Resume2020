import { connect } from 'react-redux'
import Header from './header.jsx'
import {
  setHtag,
  setHome,
  setScroll,
  setClass,
  setStep,
  setNav
} from '../../actions/header.js'
import { setMove } from '../../actions/navigation.js'
import { setButton } from '../../actions/globals'

const mapStateToProps = state => {
  return {
    classState: state.header.classState,
    navState: state.header.navState,
    htag: state.header.htag,
    tohome: state.header.tohome,
    scroll: state.header.scroll,
    step: state.header.step,
    button: state.globals.button
  }
}

const mapDispatchToProps = {
  setHtag: setHtag,
  setHome: setHome,
  setScroll: setScroll,
  setStep: setStep,
  setNav: setNav,
  setClass: setClass,
  setButton: setButton,
  setMove: setMove
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
