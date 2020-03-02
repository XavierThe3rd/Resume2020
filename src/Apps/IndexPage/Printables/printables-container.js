import { connect } from 'react-redux'
import { setPdfData, setClass } from '../../../actions/options'
import Printables from './printables.jsx'

const mapStateToProps = state => {
  return {
    clazz: state.setOptions.clazz,
    data: state.setPdfs.pdfData
    //data: state.setPenData.penData
  }
}

const mapDispatchToProps = {
  setClass: setClass,
  setData: setPdfData
}

export default connect(mapStateToProps, mapDispatchToProps)(Printables)
