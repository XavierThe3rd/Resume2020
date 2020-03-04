import { connect } from 'react-redux'
import { setCardData } from '../../../actions/card-data'
import { setCount } from '../../../actions/slider'
import FeaturedWork from './FeaturedWork.jsx'

const mapStateToProps = state => {
  return {
    data: state.setCardData.cardData,
    count: state.slider.count
  }
}

const mapDispatchToProps = {
  setData: setCardData,
  setCount: setCount
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedWork)
