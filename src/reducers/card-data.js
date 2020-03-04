import { SET_DATA } from '../actions/z-names'
import styles from '../Apps/sass/settings.scss'
import Xaragosa from '../../images/Xaragosa.png'
import Dictionary from '../../images/TypeDictionary.png'
import Heelys from '../../images/Heelys.png'
import adobe from '../../images/AdobeIcon.svg'
import photoshop from '../../images/PhotoshopIcon.svg'

let structure = {
  cardData: [
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
          pictures: [
            {
              index: 1,
              pic: Xaragosa
            },
            {
              index: 2,
              pic: Xaragosa
            },
            {
              index: 3,
              pic: Xaragosa
            }
          ],
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
    },
    {
      index: 2,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,
      Inner: [
        {
          title: 'Type Dictionary',
          para:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
          type: 'Photo Manipulation',
          button: 'See PDF',
          pictures: [
            {
              index: 1,
              pic: Xaragosa
            },
            {
              index: 2,
              pic: Xaragosa
            },
            {
              index: 3,
              pic: Xaragosa
            }
          ],
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
    },
    {
      index: 3,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,
      Inner: [
        {
          title: 'Xaragosa the Dragon',
          para:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
          type: 'Photo Manipulation',
          button: 'See PDF',
          pictures: [
            {
              index: 1,
              pic: Xaragosa
            },
            {
              index: 2,
              pic: Xaragosa
            },
            {
              index: 3,
              pic: Xaragosa
            }
          ],
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
    },

    {
      index: 4,
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
          pictures: [
            {
              index: 1,
              pic: Xaragosa
            },
            {
              index: 2,
              pic: Xaragosa
            },
            {
              index: 3,
              pic: Xaragosa
            }
          ],
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
    },
    {
      index: 5,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,
      Inner: [
        {
          title: 'Xaragosa the Dragon',
          para:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
          type: 'Photo Manipulation',
          button: 'See PDF',
          pictures: [
            {
              index: 1,
              pic: Xaragosa
            },
            {
              index: 2,
              pic: Xaragosa
            },
            {
              index: 3,
              pic: Xaragosa
            }
          ],
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
    },
    {
      index: 6,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,
      Inner: [
        {
          title: 'Xaragosa the Dragon',
          para:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
          type: 'Photo Manipulation',
          button: 'See PDF',
          pictures: [
            {
              index: 1,
              pic: Xaragosa
            },
            {
              index: 2,
              pic: Xaragosa
            },
            {
              index: 3,
              pic: Xaragosa
            }
          ],
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
      index: 7,
      image: Xaragosa,
      title: 'X',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 8,
      image: Dictionary,
      title: 'T',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 9,
      image: Heelys,
      title: 'H',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    },

    {
      index: 10,
      image: Xaragosa,
      title: 'X',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 11,
      image: Dictionary,
      title: 'T',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 12,
      image: Heelys,
      title: 'H',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    },

    {
      index: 13,
      image: Xaragosa,
      title: 'Xaragosa the Dragon',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 14,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 15,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    },
    {
      index: 16,
      image: Xaragosa,
      title: 'Xaragosa the Dragon',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 17,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 18,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    },
    {
      index: 19,
      image: Xaragosa,
      title: 'Xaragosa the Dragon',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 20,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 21,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    },

    {
      index: 22,
      image: Xaragosa,
      title: 'Xaragosa the Dragon',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      name: 'Xaragosa'
    },
    {
      index: 23,
      image: Dictionary,
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet Piece',
      type: 'ID',
      color: styles.adobeID,

      name: 'Dictionary'
    },
    {
      index: 24,
      image: Heelys,
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,

      name: 'Heelys'
    }*/
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
