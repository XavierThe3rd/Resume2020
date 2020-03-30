import { connect } from 'react-redux'
import CodePens from './codePens.jsx'
import { setPenData } from '../../../actions/codepen'
//import { setMobile } from '../../../actions/mobile'

const mapStateToProps = state => {
  return {
    data: state.setPenData.penData
  }
}

const mapDispatchToProps = {
  setData: setPenData
}

export default connect(mapStateToProps, mapDispatchToProps)(CodePens)
