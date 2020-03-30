import { connect } from 'react-redux'
import ProjectCard from './portfolioCards.jsx'
import { setCursor } from '../../../../actions/globals'

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = {
  setCursor: setCursor
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)
