import { SET_DATA } from '../../actions/z-names'
import piece from './data/pieces'

let structure = {
  cardData: [
    piece.QintelBrochure(1),
    piece.TypeDictionary(2),
    piece.HeelysComeback(3),
    piece.MountainMadness(4),
    piece.SecondWind(5),
    piece.QintelReport(6),
    piece.CopycatCarnegie(7),
    piece.ZombieMonkey(8),
    piece.DragonsOccupation(9),
    piece.KeglegBrewery(10),
    piece.WickitCandles(11),
    piece.QintelMug(12),
    piece.WhiteSpace(13),
    piece.GoodTiger(14),
    piece.NewsArticle(15)
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
