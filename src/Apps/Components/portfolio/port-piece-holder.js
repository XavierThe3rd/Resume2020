import { connect } from 'react-redux'
import ProjectPiece from './portfolioPiece.jsx'
import { setBtNav, setCursor, setButton } from '../../../actions/globals'
import { setMove } from '../../../actions/navigation.js'

const mapStateToProps = state => {
  return {
    btNav: state.globals.btNav,
    button: state.globals.button,
    move: state.navigation.move
  }
}

const mapDispatchToProps = {
  setBtNav: setBtNav,
  setButton: setButton,
  setCursor: setCursor,
  setMove: setMove
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPiece)
