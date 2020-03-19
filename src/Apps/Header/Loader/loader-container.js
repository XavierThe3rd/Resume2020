import { connect } from 'react-redux'
import Loader from './loader.jsx'
import { setLoad, setLClass, setBars } from '../../../actions/page-switch'
import { smoothScroll } from '../../../actions/application'

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
  setBars: setBars
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
