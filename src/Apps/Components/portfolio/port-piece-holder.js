import { connect } from 'react-redux'
import ProjectPiece from './portfolioPiece.jsx'
import { setBtNav, setCursor, setButton } from '../../../actions/globals'
import { setReq } from '../../../actions/slider'
import { setMove } from '../../../actions/navigation.js'

const mapStateToProps = state => {
  return {
    btNav: state.globals.btNav,
    button: state.globals.button,
    move: state.navigation.move,
    req: state.slider.req
  }
}

const mapDispatchToProps = {
  setBtNav: setBtNav,
  setButton: setButton,
  setCursor: setCursor,
  setMove: setMove,
  setReq: setReq
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPiece)
