import { SET_OPAC_HEADING } from '../../actions/z-names'

const structure = {
  opacHeading: 1
}

const heading = (state = structure, action) => {
  switch (action.type) {
    case SET_OPAC_HEADING:
      return {
        ...state,
        opacHeading: action.payload
      }
    default:
      return state
  }
}

export default heading
