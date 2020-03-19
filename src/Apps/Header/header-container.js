import { connect } from 'react-redux'
import Header from './header.jsx'
import { setHtag, setHome, setScroll, setClass, setStep, setNav } from '../../actions/header.js'
import { setButton } from '../../actions/nav-button'

const mapStateToProps = state => {
  return {
    classState: state.header.classState,
    navState: state.header.navState,
    htag: state.header.htag,
    tohome: state.header.tohome,
    scroll: state.header.scroll,
    step: state.header.step,
    button: state.navButton.button
  }
}

const mapDispatchToProps = {
  setHtag: setHtag,
  setHome: setHome,
  setScroll: setScroll,
  setStep: setStep,
  setNav: setNav,
  setClass: setClass,
  setButton: setButton
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
