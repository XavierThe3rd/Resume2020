import { connect } from 'react-redux'
import Header from './header.jsx'
import { setHtag, setHome, setScroll, setMove } from '../../actions/header.js'
import { setMobile } from '../../actions/mobile'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
  return {
    htag: state.header.htag,
    tohome: state.header.tohome,
    scroll: state.header.scroll,
    move: state.header.move
  }
}

const mapDispatchToProps = {
  setHtag: setHtag,
  setHome: setHome,
  setScroll: setScroll,
  setMove: setMove
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
