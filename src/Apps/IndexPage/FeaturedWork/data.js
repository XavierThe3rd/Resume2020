import styles from './styles.scss'
import Xaragosa from '../../../../images/Xaragosa.png'
import Dictionary from '../../../../images/TypeDictionary.png'
import Heelys from '../../../../images/Heelys.png'

const Data = () => {
  let heading = 'Featured Works'

  let cardData = [
    {
      index: 1,
      image: Xaragosa,
      title: 'Xaragosa the Dragon',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 2,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 3,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    }
  ]

  return {
    cardData: cardData,
    heading: heading
  }
}
let get = new Data()

export default get
