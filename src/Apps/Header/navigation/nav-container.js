import { connect } from 'react-redux'
import Navigation from './navigation.jsx'
import {setNav, setClass} from '../../../actions/navigation.js'
import {setMobile} from '../../../actions/mobile'

//let [classState, setClass] = useState(false)

const mapStateToProps = state => {
    return {
        mobileState: state.mobile.mobileState,
        navState: state.navigation.navState,
        classState: state.navigation.classState
    }
}

const mapDispatchToProps = {
    setMobile: setMobile,
    setNav: setNav,
    setClass: setClass
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)