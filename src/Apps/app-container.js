import { connect } from 'react-redux'
import App from './App.jsx'
import { setPos, smoothScroll } from '../actions/application'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    pos: state.application.pos
  }
}

const mapDispatchToProps = {
  setPos: setPos,
  smoothScroll: smoothScroll
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
