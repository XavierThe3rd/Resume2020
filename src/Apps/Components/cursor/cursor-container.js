import { connect } from 'react-redux'
import Cursor from './cursor.jsx'
import { setCursor } from '../../../actions/globals'

const mapStateToProps = state => {
  return {
    cursorState: state.globals.cursorState
  }
}

const mapDispatchToProps = {
  setCursor: setCursor
}

export default connect(mapStateToProps, mapDispatchToProps)(Cursor)
