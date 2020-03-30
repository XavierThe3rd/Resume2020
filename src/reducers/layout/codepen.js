import { SET_PEN_DATA } from '../../actions/z-names'

const structure = {
  penData: [
    {
      index: 1,
      title: `ExampleA`,
      search: `//codepen.io/rcyou/pen/QEObEk/`
    },
    { index: 2, title: `ExampleB`, search: `//codepen.io/rcyou/pen/QEObEk/` },
    { index: 3, title: `ExampleC`, search: `//codepen.io/rcyou/pen/QEObEk/` }
  ]
}

const setPenData = (state = structure, action) => {
  switch (action.type) {
    case SET_PEN_DATA:
      return {
        ...state,
        pos: action.payload
      }
    default:
      return state
  }
}

export default setPenData
