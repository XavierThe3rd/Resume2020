import { connect } from 'react-redux'
import Loader from './loader.jsx'
import { setLoad, setLClass, setBars } from '../../../actions/page-switch'
import { setOpacHeading } from '../../../actions/heading'
import { setCursor, smoothScroll } from '../../../actions/globals'

const mapStateToProps = state => {
  return {
    load: state.pageSwitch.load,
    linkclass: state.pageSwitch.linkclass,
    bars: state.pageSwitch.bars,
    linkData: state.pageSwitch.linkData,
    smoothScroll: smoothScroll
  }
}

const mapDispatchToProps = {
  setLoad: setLoad,
  setLClass: setLClass,
  setBars: setBars,
  setOpac: setOpacHeading,
  setCursor: setCursor
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
