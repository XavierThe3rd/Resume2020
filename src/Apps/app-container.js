import { connect } from 'react-redux'
import App from './App.jsx'
import { setStep } from '../actions/application'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    step: state.application.step
  }
}

const mapDispatchToProps = {
  setStep: setStep
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
