import { connect } from 'react-redux'
import Slider from './slider.jsx'
import { setInner, setPic, setReq2 } from '../../../actions/slider'
import { setCardData } from '../../../actions/card-data'

const mapStateToProps = state => {
  return {
    data: state.setCardData.cardData,
    inner: state.slider.inner,
    pic: state.slider.pic,
    req: state.slider.req2
  }
}

const mapDispatchToProps = {
  setData: setCardData,
  setInner: setInner,
  setPic: setPic,
  setReq: setReq2
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
