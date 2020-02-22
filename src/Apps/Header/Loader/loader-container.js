import { connect } from 'react-redux'
import Loader from './loader.jsx'
import {
  setIndex,
  setAbout,
  setPort,
  setLoad,
  setLClass,
  setBars
} from '../../../actions/page-switch'

const mapStateToProps = state => {
  return {
    index: state.pageSwitch.index,
    about: state.pageSwitch.about,
    port: state.pageSwitch.port,
    indexState: state.pageSwitch.indexState,
    aboutState: state.pageSwitch.aboutState,
    portState: state.pageSwitch.portState,
    load: state.pageSwitch.load,
    linkclass: state.pageSwitch.linkclass,
    bars: state.pageSwitch.bars
  }
}

const mapDispatchToProps = {
  setIndex: setIndex,
  setAbout: setAbout,
  setPort: setPort,
  setLoad: setLoad,
  setLClass: setLClass,
  setBars: setBars
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader)
