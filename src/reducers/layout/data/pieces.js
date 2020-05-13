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

const pieces = () => {
  let MountainMadness = ind => {
    return {
      index: ind,
      image: './images/MovieCover.png',
      title: 'Mountains of Madness',
      desc: 'A college movie poster design project created in indesign',
      project: 'Poster',
      type: 'PS',
      color: styles.adobePS,
      Inner: [
        {
          label: 'MovieCover',
          title: 'Mountain of Madness',
          para:
            'This project was a graphic arts project where I was assigned to create a movie poster for a known book using photoshop to build the visual graphic for the poster and InDesign to format the text.',
          type: 'Indesign Poster',
          button: './images/MoviePosterFinal.pdf',
          pictures: [
            {
              index: 1,
              label: 'MoviePoster',
              picture: './images/MoviePoster.png'
            },
            {
              index: 2,
              label: 'MovieCover',
              picture: './images/MovieCover.png'
            },
            {
              index: 3,
              label: 'MovieParts',
              picture: './images/MovieParts.png'
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
  }
  let TypeDictionary = ind => {
    return {
      index: ind,
      image: './images/TypeDictionary.png',
      title: 'Type Dictionary',
      desc: 'A college booklet dictionary project created in indesign',
      project: 'Booklet',
      type: 'ID',
      color: styles.adobeID,
      Inner: [
        {
          label: 'TypeDictionary',
          title: 'Type Dictionary',
          para:
            'This project was a design organization project where I was assigned to build a typography dictionary that provided twenty typeface anatomical parts with visuals to indicate the part, a definition, and a description for each one. The project had to be printed and constructed into a physical copy, which was a spiral-bound booklet.',
          type: 'Indesign Booklet',
          button: './images/OfficialDictionaryFile.pdf',
          pictures: [
            {
              index: 1,
              label: 'Cover',
              picture: './images/Cover.png'
            },
            {
              index: 2,
              label: 'TableOfContents',
              picture: './images/TableOfContents.png'
            },
            {
              index: 3,
              label: 'FullInfo',
              picture: './images/FullInfo.png'
            },
            {
              index: 4,
              label: 'Description',
              picture: './images/Description.png'
            },
            {
              index: 5,
              label: 'Definition',
              picture: './images/Definition.png'
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
  }
  let HeelysComeback = ind => {
    return {
      index: ind,
      image: './images/Heelys.png',
      title: 'Heely’s Comeback',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,
      Inner: [
        {
          label: 'Heelys',
          title: 'Heely’s Comeback',
          para:
            'This project was a webpage design project where I was assigned to create a three page, kickstart webpage of my choice that included an accompanying market campaign through social media. The webpage was designed in Illustrator and built using React.',
          type: 'Web Application',
          button: 'http://www.heelysarestillawesome.epizy.com/home/',
          pictures: [
            {
              index: 1,
              label: 'HeelysIndex',
              picture: './images/HeelysIndex.png'
            },
            {
              index: 2,
              label: 'HeelysShop',
              picture: './images/HeelysShop.png'
            },
            {
              index: 3,
              label: 'HeelysVideo',
              picture: './images/HeelysVideo.png'
            },
            {
              index: 4,
              label: 'HeelysTwitter',
              picture: './images/HeelysTwitter.png'
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
  }
  let SecondWind = ind => {
    return {
      index: ind,
      image: './images/DrinkCover.png',
      title: '2nd Wind Sport Drink',
      desc: 'A college marketing design project created in adobe',
      project: 'Label Design',
      type: 'AI',
      color: styles.adobeAI,
      Inner: [
        {
          label: 'DrinkCover',
          title: '2nd Wind Sport Drink',
          para:
            'This project was a design organization project where I was assigned to create a marketing package for a sports drink that included a logo, three flavors with accompanying labels, bottle mockups for each label, and public advertisement mockups including a magazine ad, a billboard ad, and a bus stop ad.',
          type: 'Marketing Package',
          button: './images/SecondWind.pdf',
          pictures: [
            {
              index: 1,
              label: 'Lables',
              picture: './images/Lables.png'
            },
            {
              index: 2,
              label: 'Bottles',
              picture: './images/Bottles.png'
            },
            {
              index: 3,
              label: 'BusPoster',
              picture: './images/BusPoster.png'
            },
            {
              index: 4,
              label: 'BillBoard',
              picture: './images/BillBoard.png'
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
  }
  let CopycatCarnegie = ind => {
    return {
      index: ind,
      image: './images/CarnCover.png',
      title: 'CopyCat Carnegie',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,
      Inner: [
        {
          label: 'CarnCover',
          title: 'CopyCat Carnegie',
          para:
            'This project was a webpage design project where I was assigned to copy an existing webpage of my choice and improve upon it with a total of 5 pages. This webpage was built via React and included all fetched data from static a static json file. Some of the links are directly linked to the real Carnegie webpage.',
          type: 'Web Application',
          button: 'http://www.carnegie-lib.epizy.com/build/',
          pictures: [
            {
              index: 1,
              label: 'CarnIndex',
              picture: './images/CarnIndex.png'
            },
            {
              index: 2,
              label: 'CarnLower',
              picture: './images/CarnLower.png'
            },
            {
              index: 3,
              label: 'CarnBooks',
              picture: './images/DrinkBottles.png'
            },
            {
              index: 4,
              label: 'CarnMap',
              picture: './images/CarnMap.png'
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
  }
  let ZombieMonkey = ind => {
    return {
      index: ind,
      image: './images/ZombieMonkeyCover.png',
      title: 'Zombie Monkey',
      desc: 'A logo for the Zombie Monkey Comedy Club',
      project: 'Logo Design',
      type: 'AI',
      color: styles.adobeAI,
      Inner: [
        {
          label: 'ZombieMonkeyCover',
          title: 'Zombie Monkey',
          para:
            'This logo was for the Zombie Monkey Comedy Group in Pittsburgh PA where I was paid to create a logo that captured the essence of the name of the group while still making it comical.',
          type: 'Logo Design',
          button: './images/ZombieMonkey.pdf',
          pictures: [
            {
              index: 1,
              label: 'ZombieMonkeyLogos',
              picture: './images/ZombieMonkeyLogos.png'
            },
            {
              index: 2,
              label: 'ZombieMonkeyHeads',
              picture: './images/ZombieMonkeyHeads.png'
            },
            {
              index: 3,
              label: 'ZombieMonkeyOff',
              picture: './images/ZombieMonkeyOff.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [ilustrator]
            }
          ]
        }
      ]
    }
  }
  let DragonsOccupation = ind => {
    return {
      index: ind,
      image: './images/DragonFinal.png',
      title: 'Dragon Ocupation',
      desc: 'A college graphic design project created in photoshop',
      project: 'Art Piece',
      type: 'PS',
      color: styles.adobePS,
      Inner: [
        {
          label: 'DragonFinal',
          title: 'Dragon Descent',
          para:
            'This project was a graphic arts project where I was assigned to create a photoshop photo merge of 3 or more different photos into one. I chose to create a dragon using a variety of parts ranging from an alligator tail, bat wings, and a lizard`s body, head, and legs.',
          type: 'Photoshop Manipulation',
          button: './images/DragonFinal.pdf',
          pictures: [
            {
              index: 1,
              label: 'DragonFinal',
              picture: './images/DragonFinal.png'
            },
            {
              index: 2,
              label: 'DragonAlternate',
              picture: './images/DragonAlternate.png'
            },
            {
              index: 3,
              label: 'DragonParts',
              picture: './images/DragonParts.png'
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
  }
  let KeglegBrewery = ind => {
    return {
      index: ind,
      image: './images/BeerCover.png',
      title: 'Kegleg Brewery',
      desc: 'A college group design project created with adobe',
      project: 'Design Colab',
      type: 'ID',
      color: styles.adobeID,
      Inner: [
        {
          label: 'BeerCover',
          title: 'Kegleg Brewery',
          para:
            'This project was a group design organization project where a group was assigned to come up with a bar or coffee shop, create a premise for it, and then create a marketed package for the whole. My group decided to make a pirate-themed bar were I chose to design the Logo, come up with the beers and design their labels, design a rum label, design the menu and design an advertisement. All the core concepts and ideas where created as a whole and then executed individually while sharing elements between us.',
          type: 'Design Colaberation',
          button: './images/KeglegBrewery.pdf',
          pictures: [
            {
              index: 1,
              label: 'BrochOut',
              picture: './images/BrochOut.png'
            },
            {
              index: 2,
              label: 'BrochIn',
              picture: './images/BrochIn.png'
            },
            {
              index: 3,
              label: 'BeerLables',
              picture: './images/BeerLables.png'
            },
            {
              index: 4,
              label: 'BeerMock',
              picture: './images/BeerMock.png'
            },
            {
              index: 5,
              label: 'SpringPoster',
              picture: './images/SpringPoster.png'
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
  }
  let WhiteSpace = ind => {
    return {
      index: ind,
      image: './images/WhiteSpaceCover.png',
      title: 'Dat WhiteSpace',
      desc: 'A college whitespace logo project created in illustrator',
      project: 'Logo Design',
      type: 'AI',
      color: styles.adobeAI,
      Inner: [
        {
          label: 'WhiteSpaceCover',
          title: 'Dat Whitespace',
          para:
            'This project was a graphic arts project where I was assigned to come up with a word or phrase and utilize the whitespace of it to create an image in the type or combine two words as a whole.',
          type: 'Logo Design',
          button: './images/Whitespace.pdf',
          pictures: [
            {
              index: 1,
              label: 'WhiteSpaceBlue',
              picture: './images/WhiteSpaceBlue.png'
            },
            {
              index: 2,
              label: 'WhiteSpaceOrange',
              picture: './images/WhiteSpaceOrange.png'
            },
            {
              index: 3,
              label: 'WhiteSpaceOnions',
              picture: './images/WhiteSpaceOnions.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [ilustrator]
            }
          ]
        }
      ]
    }
  }
  let GoodTiger = ind => {
    return {
      index: ind,
      image: './images/GoodTigerSkull.png',
      title: 'Album Redesign',
      desc: 'A college CD cover design project created with adobe',
      project: 'CD Cover',
      type: 'PS',
      color: styles.adobePS,
      Inner: [
        {
          label: 'GoodTigerSkull',
          title: 'Album Redesign',
          para:
            'This project was a graphic arts project where I was assigned to redesign an existing album cover entirely, which also included a cd and cover mockup.',
          type: 'CD Cover & Package Design',
          button: './images/GoodTiger.pdf',
          pictures: [
            {
              index: 1,
              label: 'GoodTigerCover',
              picture: './images/GoodTigerCover.png'
            },
            {
              index: 2,
              label: 'GoodTigerCD',
              picture: './images/GoodTigerCD.png'
            },
            {
              index: 3,
              label: 'GoodTigerMockup',
              picture: './images/GoodTigerMockup.png'
            },
            {
              index: 4,
              label: 'GoodTigerComps',
              picture: './images/GoodTigerComps.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [photoshop, indesign, ilustrator]
            }
          ]
        }
      ]
    }
  }
  let WickitCandles = ind => {
    return {
      index: ind,
      image: './images/WickCover.png',
      title: 'Wickit Candles',
      desc: 'A college webpage design project created in react',
      project: 'Web App',
      type: 'JS',
      color: styles.reactJS,
      Inner: [
        {
          label: 'WickCover',
          title: 'Wickit Candles',
          para:
            'This project was a web design project where I was assigned to create a three paged webpage that utilized bootstrap based components. The elements used derive from the Materials UI Library for React.',
          type: 'Web Application',
          button: 'http://www.wickit.epizy.com/build/',
          pictures: [
            {
              index: 1,
              label: 'WickIndex',
              picture: './images/WickIndex.png'
            },
            {
              index: 2,
              label: 'WickCandles',
              picture: './images/WickCandles.png'
            },
            {
              index: 3,
              label: 'WickCandlesOpen',
              picture: './images/WickCandlesOpen.png'
            },
            {
              index: 4,
              label: 'WickFrag',
              picture: './images/WickFrag.png'
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
  }
  let NewsArticle = ind => {
    return {
      index: ind,
      image: './images/NewsArticlePlain.png',
      title: 'Warcraft Mag Article',
      desc: 'A college magazine article project created in indesign',
      project: 'Magazine',
      type: 'ID',
      color: styles.adobeID,
      Inner: [
        {
          label: 'NewsArticlePlain',
          title: 'Warcraft Magazine Article',
          para:
            'This project was a graphic production project where I was assigned to format an existing article on the web for a magazine. This project was printed, cropped, and formated with CMYK color separates printed as well.',
          type: 'Magazine Article Design',
          button: './images/BLizzardArticle.pdf',
          pictures: [
            {
              index: 1,
              label: 'NewsArticleCover',
              picture: './images/NewsArticleCover.png'
            },
            {
              index: 2,
              label: 'NewsArticleBody',
              picture: './images/NewsArticleBody.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [indesign, photoshop]
            }
          ]
        }
      ]
    }
  }
  let QintelBrochure = ind => {
    return {
      index: ind,
      image: './images/BrochCover.png',
      title: 'Qintel Brochure',
      desc: 'The company brochure for Qintel created with adobe',
      project: 'Brochure',
      type: 'AI',
      color: styles.adobeAI,
      Inner: [
        {
          label: 'BrochCover',
          title: 'Qintel Brochure',
          para:
            'For the year 2020, the company wanted to update their brochure with an entirely new angle of design that could capture the abstractivity of the field of cyber security. The brochures layout is based on an open booklet with inner folded pages that revolve around an illustrated dialog of an agent solving the puzzle of finding a cyber criminal with the power of the companies main product, Crosslink. Placeholder text is substituted as per request by the company.',
          type: 'Brochure Design',
          button: './images/QintelBrochure.pdf',
          pictures: [
            {
              index: 1,
              label: 'BrochCover',
              picture: './images/BrochCover.png'
            },
            {
              index: 2,
              label: 'BrochLayout',
              picture: './images/BrochLayout.png'
            },
            {
              index: 3,
              label: 'BrochMockup',
              picture: './images/BrochMockup.png'
            },
            {
              index: 4,
              label: 'BrochCube',
              picture: './images/BrochCube.png'
            },
            {
              index: 5,
              label: 'BrochIllustrate',
              picture: './images/BrochIllustrate.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [ilustrator, photoshop, indesign]
            }
          ]
        }
      ]
    }
  }
  let QintelReport = ind => {
    return {
      index: ind,
      image: './images/ReportCover.png',
      title: 'Qintel Reports',
      desc: 'A Qintel Customer Reports Created with Adobe',
      project: 'Reports',
      type: 'AI',
      color: styles.adobeAI,
      Inner: [
        {
          title: 'Qintel Reports',
          para:
            'The porject that landed me a payed internship, these report designs where requested for our customers who where having trouble reading the Excel charts that were provided. The charts were designed and generated in a program known as Numbers. All relevant data has been replaced with placeholder information as per request by the company.',
          type: 'Report Design',
          button: './images/QintelReports.pdf',
          pictures: [
            {
              index: 1,
              picture: './images/ReportA.png'
            },
            {
              index: 2,
              picture: './images/ReportB.png'
            },
            {
              index: 3,
              picture: './images/ReportC.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [ilustrator, indesign]
            }
          ]
        }
      ]
    }
  }
  let QintelMug = ind => {
    return {
      index: ind,
      image: './images/MugMock.png',
      title: 'Qintel Coffee Cup',
      desc: 'A Qintel Mug Design created in Illustrator',
      project: 'Merchandise',
      type: 'AI',
      color: styles.adobeAI,
      Inner: [
        {
          title: 'Qintel Coffee Cup',
          para:
            'Qintel wanted to provide some new merchandise for confrences and our customers, one of which was a coffee cup. This design was made for the Pittsburgh Financial Electronic Crimes Task Force.',
          type: 'Merchandise Design',
          button: './images/QintelMug.pdf',
          pictures: [
            {
              index: 1,
              picture: './images/MugDesign.png'
            },
            {
              index: 2,
              picture: './images/MugMock.png'
            }
          ],
          icons: [
            {
              prime: adobe,
              secondary: [ilustrator]
            }
          ]
        }
      ]
    }
  }

  return {
    DragonsOccupation: DragonsOccupation,
    TypeDictionary: TypeDictionary,
    HeelysComeback: HeelysComeback,
    MountainMadness: MountainMadness,
    CopycatCarnegie: CopycatCarnegie,
    WickitCandles: WickitCandles,
    SecondWind: SecondWind,
    KeglegBrewery: KeglegBrewery,
    GoodTiger: GoodTiger,
    WhiteSpace: WhiteSpace,
    NewsArticle: NewsArticle,
    ZombieMonkey: ZombieMonkey,
    QintelBrochure: QintelBrochure,
    QintelReport: QintelReport,
    QintelMug: QintelMug
  }
}

let piece = new pieces()

export default piece
