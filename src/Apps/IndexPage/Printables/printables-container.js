import { connect } from 'react-redux'
import { setPdfData } from '../../../actions/options'
import Printables from './printables.jsx'

const mapStateToProps = state => {
  return {
    data: state.setPdfs.pdfData
    //data: state.setPenData.penData
  }
}

const mapDispatchToProps = {
  setData: setPdfData
}

export default connect(mapStateToProps, mapDispatchToProps)(Printables)
