import { SET_POS } from '../actions/z-names'

const structure = {
  pos: true
}

const application = (state = structure, action) => {
  switch (action.type) {
    case SET_POS:
      return {
        ...state,
        pos: action.payload
      }
    default:
      return state
  }
}

export default application
