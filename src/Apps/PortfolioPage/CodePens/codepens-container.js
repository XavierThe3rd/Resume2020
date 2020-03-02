import { connect } from 'react-redux'
import CodePens from './codePens.jsx'
import { setPen } from '../../../actions/codepen'
import { setClass } from '../../../actions/options'
import { setPenData } from '../../../actions/codepen'
//import { setMobile } from '../../../actions/mobile'

const mapStateToProps = state => {
  return {
    data: state.setPenData.penData,
    clazz: state.setOptions.clazz
  }
}

const mapDispatchToProps = {
  setData: setPenData,
  setClass: setClass
}

export default connect(mapStateToProps, mapDispatchToProps)(CodePens)
