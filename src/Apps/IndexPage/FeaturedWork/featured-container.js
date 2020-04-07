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
import { setOpacNav, setMove } from '../../../actions/navigation.js'
import { smoothScroll, setCursor } from '../../../actions/globals'
import { setDist, setScroll } from '../../../actions/header'

const mapStateToProps = state => {
  return {
    data: state.setCardData.cardData,
    pic: state.slider.pic,
    smoothScroll: smoothScroll
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
  setHtag: setHtag,
  setCursor: setCursor,
  setOpacNav: setOpacNav,
  setMove: setMove,
  setDist: setDist,
  setScroll: setScroll
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedWork)
