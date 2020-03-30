import { connect } from 'react-redux'
import Slider from './slider.jsx'
import { setCount, setInner, setPic } from '../../../actions/slider'
import { setCardData } from '../../../actions/card-data'

const mapStateToProps = state => {
  return {
    count: state.slider.count,
    data: state.setCardData.cardData,
    inner: state.slider.inner,
    pic: state.slider.pic
  }
}

const mapDispatchToProps = {
  setCount: setCount,
  setData: setCardData,
  setInner: setInner,
  setPic: setPic
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
