import styles from '../../../Apps/styles/settings.css'
//-----------------------------Icons--------------------------------//
import adobe from '../../../../images/AdobeIcon.svg'
import photoshop from '../../../../images/PhotoshopIcon.svg'
import ilustrator from '../../../../images/IlustratorIcon.svg'
import indesign from '../../../../images/IndesignIcon.svg'
import reactIc from '../../../../images/ReactIcon.svg'
import sassIc from '../../../../images/SassIcon.svg'
import htmlIc from '../../../../images/HtmlIcon.svg'
import jsIc from '../../../../images/JsIcon.svg'
//----------------------------Photos--------------------------------//
//-------------Dragon---------------//
import DragonFinal from '../../../../images/Dragon/DragonFinal.png'
import DragonParts from '../../../../images/Dragon/DragonParts.png'
import DragonAlternate from '../../../../images/Dragon/DragonAlternate.png'
//------------Dictionary------------//
import Dictionary from '../../../../images/TypeDictionary/TypeDictionary.png'
import Cover from '../../../../images/TypeDictionary/Cover.png'
import Table from '../../../../images/TypeDictionary/TableOfContents.png'
import FullInfo from '../../../../images/TypeDictionary/FullInfo.png'
import Definition from '../../../../images/TypeDictionary/Definition.png'
import Description from '../../../../images/TypeDictionary/Description.png'
//--------------Heelys--------------//
import Heelys from '../../../../images/Heelys/Heelys.png'
import HeelysIndex from '../../../../images/Heelys/HeelysIndex.png'
import HeelysShop from '../../../../images/Heelys/HeelysShop.png'
import HeelysVideo from '../../../../images/Heelys/HeelysVideo.png'
import HeelysTwitter from '../../../../images/Heelys/HeelysTwitter.png'
//--------------Movie---------------//
import MovieCover from '../../../../images/MoviePoster/MovieCover.png'
import MovieParts from '../../../../images/MoviePoster/MovieParts.png'
import MoviePoster from '../../../../images/MoviePoster/MoviePoster.png'
//------------Carnegie--------------//
import CarnCover from '../../../../images/Carnegie/CarnCover.png'
import CarnIndex from '../../../../images/Carnegie/CarnIndex.png'
import CarnLower from '../../../../images/Carnegie/CarnLower.png'
import CarnBooks from '../../../../images/Carnegie/CarnBooks.png'
import CarnMap from '../../../../images/Carnegie/CarnMap.png'
//-------------Wickit---------------//
import WickCover from '../../../../images/Wickit/WickCover.png'
import WickIndex from '../../../../images/Wickit/WickIndex.png'
import WickCandles from '../../../../images/Wickit/WickCandles.png'
import WickCandlesOpen from '../../../../images/Wickit/WickCandlesOpen.png'
import WickFrag from '../../../../images/Wickit/WickFrag.png'
//------------SecondWind------------//
import DrinkCover from '../../../../images/SecondWind/DrinkCover.png'
import DrinkLables from '../../../../images/SecondWind/Lables.png'
import DrinkBottles from '../../../../images/SecondWind/Bottles.png'
import BusPoster from '../../../../images/SecondWind/BusPoster.png'
import BillBoard from '../../../../images/SecondWind/BillBoard.png'
//--------------KegLeg--------------//
import BeerCover from '../../../../images/KeglegBrewer/BeerCover.png'
import BrochIn from '../../../../images/KeglegBrewer/BrochIn.png'
import BrochOut from '../../../../images/KeglegBrewer/BrochOut.png'
import BeerLables from '../../../../images/KeglegBrewer/BeerLables.png'
import BeerMock from '../../../../images/KeglegBrewer/BeerMock.png'
import SpringPoster from '../../../../images/KeglegBrewer/SpringPoster.png'

const pieces = () => {
  let DragonsOccupation = {
    index: 1,
    image: DragonFinal,
    title: 'Dragon Ocupation',
    desc: 'A college graphic design project created in photoshop',
    project: 'Art Piece',
    type: 'PS',
    color: styles.adobePS,
    Inner: [
      {
        title: 'Dragon Descent',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Photoshop Manipulation',
        button: 'http://xavierthe3rd.epizy.com/ArtDirectory/DragonFinal.pdf',
        pictures: [
          {
            index: 1,
            pic: DragonFinal
          },
          {
            index: 2,
            pic: DragonAlternate
          },
          {
            index: 3,
            pic: DragonParts
          }
        ],
        icons: [
          {
            prime: adobe,
            secondary: [photoshop, ilustrator]
          }
        ]
      }
    ]
  }
  let TypeDictionary = {
    index: 2,
    image: Dictionary,
    title: 'Type Dictionary',
    desc: 'A college booklet dictionary project created in indesign',
    project: 'Booklet',
    type: 'ID',
    color: styles.adobeID,
    Inner: [
      {
        title: 'Type Dictionary',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Indesign Booklet',
        button:
          'http://xavierthe3rd.epizy.com/ArtDirectory/OfficialDictionaryFile.pdf',
        pictures: [
          {
            index: 1,
            pic: Cover
          },
          {
            index: 2,
            pic: Table
          },
          {
            index: 3,
            pic: FullInfo
          },
          {
            index: 4,
            pic: Description
          },
          {
            index: 5,
            pic: Definition
          }
        ],
        icons: [
          {
            prime: adobe,
            secondary: [indesign, ilustrator]
          }
        ]
      }
    ]
  }
  let HeelysComeback = {
    index: 3,
    image: Heelys,
    title: 'Heely’s Comeback',
    desc: 'A college webpage design project created in react',
    project: 'Web App',
    type: 'JS',
    color: styles.reactJS,
    Inner: [
      {
        title: 'Heely’s Comeback',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Web Application',
        button: 'http://www.heelysarestillawesome.epizy.com/home/',
        pictures: [
          {
            index: 1,
            pic: HeelysIndex
          },
          {
            index: 2,
            pic: HeelysShop
          },
          {
            index: 3,
            pic: HeelysVideo
          },
          {
            index: 4,
            pic: HeelysTwitter
          }
        ],
        icons: [
          {
            prime: reactIc,
            secondary: [jsIc, sassIc, htmlIc]
          },
          {
            prime: adobe,
            secondary: [photoshop, ilustrator]
          }
        ]
      }
    ]
  }
  let MountainMadness = {
    index: 4,
    image: MovieCover,
    title: 'Mountains of Madness',
    desc: 'A college movie poster design project created in indesign',
    project: 'Poster',
    type: 'PS',
    color: styles.adobePS,
    Inner: [
      {
        title: 'Mountain of Madness',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Indesign Poster',
        button:
          'http://xavierthe3rd.epizy.com/ArtDirectory/MoviePosterFinal.pdf',
        pictures: [
          {
            index: 1,
            pic: MoviePoster
          },
          {
            index: 2,
            pic: MovieCover
          },
          {
            index: 3,
            pic: MovieParts
          }
        ],
        icons: [
          {
            prime: adobe,
            secondary: [indesign, photoshop, ilustrator]
          }
        ]
      }
    ]
  }
  let CopycatCarnegie = {
    index: 5,
    image: CarnCover,
    title: 'CopyCat Carnegie',
    desc: 'A college webpage design project created in react',
    project: 'Web App',
    type: 'JS',
    color: styles.reactJS,
    Inner: [
      {
        title: 'CopyCat Carnegie',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Web Application',
        button: 'http://www.carnegie-lib.epizy.com/build/',
        pictures: [
          {
            index: 1,
            pic: CarnIndex
          },
          {
            index: 2,
            pic: CarnLower
          },
          {
            index: 3,
            pic: CarnBooks
          },
          {
            index: 4,
            pic: CarnMap
          }
        ],
        icons: [
          {
            prime: reactIc,
            secondary: [jsIc, sassIc, htmlIc]
          }
        ]
      }
    ]
  }
  let WickitCandles = {
    index: 6,
    image: WickCover,
    title: 'Wickit Candles',
    desc: 'A college webpage design project created in react',
    project: 'Web App',
    type: 'JS',
    color: styles.reactJS,
    Inner: [
      {
        title: 'Wickit Candles',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Web Application',
        button: 'http://www.wickit.epizy.com/build/',
        pictures: [
          {
            index: 1,
            pic: WickIndex
          },
          {
            index: 2,
            pic: WickCandles
          },
          {
            index: 3,
            pic: WickCandlesOpen
          },
          {
            index: 4,
            pic: WickFrag
          }
        ],
        icons: [
          {
            prime: reactIc,
            secondary: [jsIc, sassIc, htmlIc]
          },
          {
            prime: adobe,
            secondary: [ilustrator]
          }
        ]
      }
    ]
  }
  let SecondWind = {
    index: 7,
    image: DrinkCover,
    title: '2nd Wind Sport Drink',
    desc: 'A college marketing design project created in adobe',
    project: 'Market Package',
    type: 'AI',
    color: styles.adobeAI,
    Inner: [
      {
        title: '2nd Wind Sport Drink',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Marketing Package',
        button: 'http://xavierthe3rd.epizy.com/ArtDirectory/SecondWind.pdf',
        pictures: [
          {
            index: 1,
            pic: DrinkLables
          },
          {
            index: 2,
            pic: DrinkBottles
          },
          {
            index: 3,
            pic: BusPoster
          },
          {
            index: 4,
            pic: BillBoard
          }
        ],
        icons: [
          {
            prime: adobe,
            secondary: [ilustrator, indesign, photoshop]
          }
        ]
      }
    ]
  }
  let KeglegBrewery = {
    index: 8,
    image: BeerCover,
    title: 'Kegleg Brewery',
    desc: 'A college group design project created with adobe',
    project: 'Design Colab',
    type: 'ID',
    color: styles.adobeID,
    Inner: [
      {
        title: 'Kegleg Brewery',
        para:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dianonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.',
        type: 'Design Colaberation',
        button: 'http://xavierthe3rd.epizy.com/ArtDirectory/KeglegBrewery.pdf',
        pictures: [
          {
            index: 1,
            pic: BrochOut
          },
          {
            index: 2,
            pic: BrochIn
          },
          {
            index: 3,
            pic: BeerLables
          },
          {
            index: 4,
            pic: BeerMock
          },
          {
            index: 5,
            pic: SpringPoster
          }
        ],
        icons: [
          {
            prime: adobe,
            secondary: [ilustrator, indesign, photoshop]
          }
        ]
      }
    ]
  }

  return {
    DragonsOccupation: DragonsOccupation,
    TypeDictionary: TypeDictionary,
    HeelysComeback: HeelysComeback,
    MountainMadness: MountainMadness,
    CopycatCarnegie: CopycatCarnegie,
    WickitCandles: WickitCandles,
    SecondWind: SecondWind,
    KeglegBrewery: KeglegBrewery
  }
}

let piece = new pieces()

export default piece
