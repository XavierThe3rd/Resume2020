import {
  SET_NAME,
  SET_EMAIL,
  SET_SUBJECT,
  SET_MESSAGE,
  SET_MORE,
  SET_SENT,
  SET_THANKS
} from '../actions/z-names'

export const setName = data => {
  return {
    type: SET_NAME,
    payload: data
  }
}

export const setEmail = data => {
  return {
    type: SET_EMAIL,
    payload: data
  }
}

export const setSubject = data => {
  return {
    type: SET_SUBJECT,
    payload: data
  }
}

export const setMessage = data => {
  return {
    type: SET_MESSAGE,
    payload: data
  }
}

export const setMore = data => {
  return {
    type: SET_MORE,
    payload: data
  }
}

export const setSent = data => {
  return {
    type: SET_SENT,
    payload: data
  }
}

export const setThanks = data => {
  return {
    type: SET_THANKS,
    payload: data
  }
}
