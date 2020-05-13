import { connect } from 'react-redux'
import Pictures from './pictures.jsx'
import { setPic, setReq } from '../../../../../actions/slider'

const mapStateToProps = state => {
  return {
    pic: state.slider.pic
    //req: state.slider.req
  }
}

const mapDispatchToProps = {
  setPic: setPic
  //setReq: setReq
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)
