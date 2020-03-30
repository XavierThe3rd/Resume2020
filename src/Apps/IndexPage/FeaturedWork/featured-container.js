import { connect } from 'react-redux'
import { setCardData } from '../../../actions/card-data'
import { setPic } from '../../../actions/slider'
import FeaturedWork from './FeaturedWork.jsx'
import {
  setNav,
  setClass,
  setHome,
  setStep,
  setHtag
} from '../../../actions/header'
import { setLClass, setLoad } from '../../../actions/page-switch'
import { setOpacHeading } from '../../../actions/heading'

const mapStateToProps = state => {
  return {
    data: state.setCardData.cardData,
    pic: state.slider.pic
  }
}

const mapDispatchToProps = {
  setData: setCardData,
  setPic: setPic,
  setNav: setNav,
  setClass: setClass,
  setLoad: setLoad,
  setLClass: setLClass,
  setHome: setHome,
  setStep: setStep,
  setOpac: setOpacHeading,
  setHtag: setHtag
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedWork)
