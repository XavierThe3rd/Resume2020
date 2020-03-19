import { connect } from 'react-redux'
import { setMobile } from '../../../../actions/mobile'
import ProjectCard from './portfolioCards.jsx'

const mapStateToProps = state => {
  return {
    mobile: state.mobile.mobileState
  }
}

export default connect(mapStateToProps)(ProjectCard)
