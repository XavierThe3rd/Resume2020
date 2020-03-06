import { connect } from 'react-redux'
import Slider from './slider.jsx'
import {
  setOutR,
  setOutL,
  setInR,
  setInL,
  setCount,
  setInner,
  setPic
} from '../../../actions/slider'
import { setCardData } from '../../../actions/card-data'
import { setMobile } from '../../../actions/mobile'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    outStateR: state.slider.outStateR,
    outStateL: state.slider.outStateL,
    inStateR: state.slider.inStateR,
    inStateL: state.slider.inStateL,
    mobileState: state.mobile.mobileState,
    count: state.slider.count,
    data: state.setCardData.cardData,
    inner: state.slider.inner,
    pic: state.slider.pic
  }
}

const mapDispatchToProps = {
  setOutR: setOutR,
  setOutL: setOutL,
  setInR: setInR,
  setInL: setInL,
  setMobile: setMobile,
  setCount: setCount,
  setData: setCardData,
  setInner: setInner,
  setPic
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
