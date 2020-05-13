import { SET_KEY, SET_SECRET } from '../../actions/z-names'

const structure = {
  secret: '',
  keys: ''
}

const login = (state = structure, action) => {
  switch (action.type) {
    case SET_SECRET:
      return {
        ...state,
        secret: action.payload
      }
    case SET_KEY:
      return {
        ...state,
        keys: action.payload
      }
    default:
      return state
  }
}

export default login
