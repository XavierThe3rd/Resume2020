import { SET_INDEX_DATA } from '../../actions/z-names'

const structure = {
  indexData: {
    introTitle: 'Providing Versatility',
    introPara:
      'My name is Thomas Xavier Grasso the 3rd, and for the past two years, I have been acquiring my degree in Graphic Design while also accumulating a vast knowledge of front-end & backend programming skills on my own time. Now that I’ve graduated, I look forward to providing my expertise to you and your company. My skill set is expansive in what I can contribute from graphic design to front-end development to UX/UI design.',
    internTitle: 'Interned At',
    internPara:
      'Qintel provided excellent experience in the field of graphic design, acquiring skills of a wide variety from report design to programming to other off-hand skills such as analytical work.'
  }
}

const index = (state = structure, action) => {
  switch (action.type) {
    case SET_INDEX_DATA:
      return {
        ...state,
        pos: action.payload
      }
    default:
      return state
  }
}

export default index
