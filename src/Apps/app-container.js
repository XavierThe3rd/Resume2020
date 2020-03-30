import { connect } from 'react-redux'
import App from './App.jsx'
import { smoothScroll } from '../actions/globals'

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = {
  smoothScroll: smoothScroll
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
