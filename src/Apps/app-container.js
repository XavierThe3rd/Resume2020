import { connect } from 'react-redux'
import App from './App.jsx'
import { setPos, smoothScroll } from '../actions/application'

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = {
  smoothScroll: smoothScroll
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
