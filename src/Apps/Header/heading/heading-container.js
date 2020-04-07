import { connect } from 'react-redux'
import Heading from './heading.jsx'
import { setDist } from '../../../actions/header'
import { setOpacHeading } from '../../../actions/heading'
import { setMove } from '../../../actions/navigation.js'

const mapStateToProps = state => {
  return {
    dist: state.header.dist,
    opac: state.heading.opacHeading
  }
}

const mapDispatchToProps = {
  setDist: setDist,
  setOpac: setOpacHeading,
  setMove: setMove
}

export default connect(mapStateToProps, mapDispatchToProps)(Heading)