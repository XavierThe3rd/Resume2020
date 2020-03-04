import styles from './styles.scss'
import Xaragosa from '../../../../images/Xaragosa.png'
import Dictionary from '../../../../images/TypeDictionary.png'
import Heelys from '../../../../images/Heelys.png'
import adobe from '../../../../images/AdobeIcon.svg'
import photoshop from '../../../../images/PhotoshopIcon.svg'

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
      Inner: [
        {
          title: 'Xaragosa the Dragon',
          para:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
          type: 'Photo Manipulation',
          button: 'See PDF',
          icons: [
            {
              prime: adobe,
              secondary: [photoshop, photoshop, photoshop]
            },
            {
              prime: adobe,
              secondary: [photoshop, photoshop, photoshop]
            }
          ]
        }
      ]
    }
    /*
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
    }*/
  ]

  return {
    cardData: cardData,
    heading: heading
  }
}
let get = new Data()

export default get
