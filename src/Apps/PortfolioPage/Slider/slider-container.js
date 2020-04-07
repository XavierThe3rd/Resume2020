import { connect } from 'react-redux'
import Slider from './slider.jsx'
import { setInner, setPic } from '../../../actions/slider'
import { setCardData } from '../../../actions/card-data'

const mapStateToProps = state => {
  return {
    data: state.setCardData.cardData,
    inner: state.slider.inner,
    pic: state.slider.pic
  }
}

const mapDispatchToProps = {
  setData: setCardData,
  setInner: setInner,
  setPic: setPic
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
