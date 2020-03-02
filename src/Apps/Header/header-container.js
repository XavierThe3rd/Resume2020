import { connect } from 'react-redux'
import Header from './header.jsx'
import {
  setHtag,
  setHome,
  setScroll,
  setClass,
  setMove,
  setOpac,
  setZ,
  setStep,
  setNav,
  setDist,
  setLast,
  setNext
} from '../../actions/header.js'
import { setMobile } from '../../actions/mobile'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    classState: state.header.classState,
    navState: state.header.navState,
    mobileState: state.mobile.mobileState,
    htag: state.header.htag,
    tohome: state.header.tohome,
    scroll: state.header.scroll,
    move: state.header.move,
    opac: state.header.opac,
    zind: state.header.zind,
    step: state.header.step,
    dist: state.header.dist,
    last: state.header.last,
    next: state.header.next
  }
}

const mapDispatchToProps = {
  setHtag: setHtag,
  setHome: setHome,
  setScroll: setScroll,
  setMove: setMove,
  setOpac: setOpac,
  setMobile: setMobile,
  setZ: setZ,
  setStep: setStep,
  setNav: setNav,
  setClass: setClass,
  setDist: setDist,
  setLast: setLast,
  setNext: setNext
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
