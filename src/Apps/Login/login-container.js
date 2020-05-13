import { connect } from 'react-redux'
import Login from './login.jsx'
import { setKeys, setSecret } from '../../actions/login'

const mapStateToProps = state => {
  return {
    secret: state.login.secret,
    keys: state.login.keys
  }
}

const mapDispatchToProps = {
  setKeys: setKeys,
  setSecret: setSecret
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
