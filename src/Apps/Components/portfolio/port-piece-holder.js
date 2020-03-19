import { connect } from 'react-redux'
import ProjectPiece from './portfolioPiece.jsx'
import { setBtNav } from '../../../actions/globals'
import { setButton } from '../../../actions/nav-button'

const mapStateToProps = state => {
  return {
    btNav: state.globals.btNav,
    button: state.navButton.button
  }
}

const mapDispatchToProps = {
  setBtNav: setBtNav,
  setButton: setButton
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPiece)
