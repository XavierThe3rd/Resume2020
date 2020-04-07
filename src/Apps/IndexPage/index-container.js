import { connect } from 'react-redux'
import Index from './indexPage.jsx'
import {
  setNav,
  setClass,
  setHome,
  setStep,
  setHtag
} from '../../actions/header'
import { setLClass, setLoad } from '../../actions/page-switch'
import { smoothScroll, setCursor } from '../../actions/globals'
import { setOpacNav, setMove } from '../../actions/navigation.js'
import { setOpacHeading } from '../../actions/heading'
import { setDist, setScroll } from '../../actions/header'

const mapStateToProps = state => {
  return {
    linkData: state.pageSwitch.linkData,
    index: state.index.indexData
  }
}

const mapDispatchToProps = {
  setNav: setNav,
  setClass: setClass,
  setLoad: setLoad,
  setLClass: setLClass,
  setHome: setHome,
  setStep: setStep,
  smoothScroll: smoothScroll,
  setOpac: setOpacHeading,
  setHtag: setHtag,
  setCursor: setCursor,
  setOpacNav: setOpacNav,
  setMove: setMove,
  setDist: setDist,
  setScroll: setScroll
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
