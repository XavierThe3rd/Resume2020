import { connect } from 'react-redux'
import About from './aboutPage.jsx'

const mapStateToProps = state => {
  return {
    about: state.about.aboutData
  }
}

export default connect(mapStateToProps)(About)
