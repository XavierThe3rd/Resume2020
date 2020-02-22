import {
  SET_INDEX,
  SET_ABOUT,
  SET_PORT,
  SET_LOAD,
  SET_LINKCLASS,
  SET_BARS
} from '../actions/z-names'

export const setIndex = newPage => {
  return {
    type: SET_INDEX,
    payload: newPage
  }
}

export const setAbout = newPage => {
  return {
    type: SET_ABOUT,
    payload: newPage
  }
}

export const setPort = newPage => {
  return {
    type: SET_PORT,
    payload: newPage
  }
}

export const setLoad = newKey => {
  return {
    type: SET_LOAD,
    payload: newKey
  }
}

export const setLClass = newKey => {
  return {
    type: SET_LINKCLASS,
    payload: newKey
  }
}

export const setBars = newKey => {
  return {
    type: SET_BARS,
    payload: newKey
  }
}
