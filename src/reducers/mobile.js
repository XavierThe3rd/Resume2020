import { SET_MOBILE } from '../actions/z-names'

const structure = {
    mobileState: false
}

const mobile =  (state = structure, action) => {
    switch (action.type) {
        case SET_MOBILE:
            return {
                ...state,
                mobileState: action.payload
            }
        default:
            return state
    }
}

export default mobile