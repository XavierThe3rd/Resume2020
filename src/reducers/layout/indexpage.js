import { SET_INDEX_DATA } from '../../actions/z-names'

const structure = {
  indexData: {
    introTitle: 'Providing Versatility',
    introPara:
      'Based in the city of pittsburgh, for the past 2 years I have been aquiring my degree in Graphic Design while also accumulating a vast knowledge of front-end & backend programming skills on my own accord. Now finished I look forward to finally providing my skills to you and your company.',
    internTitle: 'Interned At',
    internPara:
      'Qintel provided excellent experience in the field of graphic desing aquiring skills of a wide variety from report design to programming to other off hand skills such as analytical work.'
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
