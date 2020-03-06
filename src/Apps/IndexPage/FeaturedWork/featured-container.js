import { connect } from 'react-redux'
import { setCardData } from '../../../actions/card-data'
import { setInner, setPic } from '../../../actions/slider'
import FeaturedWork from './FeaturedWork.jsx'

const mapStateToProps = state => {
  return {
    data: state.setCardData.cardData,
    pic: state.slider.pic,
    inner: state.slider.inner
  }
}

const mapDispatchToProps = {
  setData: setCardData,
  setPic: setPic,
  setInner: setInner
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedWork)
