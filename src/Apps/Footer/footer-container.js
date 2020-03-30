import { connect } from 'react-redux'
import Footer from './footer.jsx'

const mapStateToProps = state => {
  return {
    data: state.footerdata.footdata
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
