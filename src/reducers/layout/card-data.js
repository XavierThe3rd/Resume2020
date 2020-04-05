import { SET_DATA } from '../../actions/z-names'
import piece from './data/pieces'

let structure = {
  cardData: [
    piece.DragonsOccupation,
    piece.TypeDictionary,
    piece.HeelysComeback,
    piece.MountainMadness,
    piece.WickitCandles,
    piece.CopycatCarnegie,
    piece.SecondWind,
    piece.KeglegBrewery
  ]
}

const setCardData = (state = structure, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        cardData: action.payload
      }
    default:
      return state
  }
}

export default setCardData
