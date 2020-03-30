import { connect } from 'react-redux'
import ProjectPiece from './portfolioPiece.jsx'
import { setBtNav, setCursor, setButton } from '../../../actions/globals'

const mapStateToProps = state => {
  return {
    btNav: state.globals.btNav,
    button: state.globals.button
  }
}

const mapDispatchToProps = {
  setBtNav: setBtNav,
  setButton: setButton,
  setCursor: setCursor
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPiece)
