import {
  SET_NAME,
  SET_EMAIL,
  SET_SUBJECT,
  SET_MESSAGE,
  SET_MORE,
  SET_SENT,
  SET_THANKS
} from '../../actions/z-names'

const structure = {
  name: '',
  email: '',
  subject: '',
  message: '',
  more: false,
  sent: false,
  thanks: false
}

const footer = (state = structure, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case SET_SUBJECT:
      return {
        ...state,
        subject: action.payload
      }
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case SET_MORE:
      return {
        ...state,
        more: action.payload
      }
    case SET_SENT:
      return {
        ...state,
        sent: action.payload
      }
    case SET_THANKS:
      return {
        ...state,
        thanks: action.payload
      }
    default:
      return state
  }
}

export default footer
