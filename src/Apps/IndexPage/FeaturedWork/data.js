import styles from './styles.scss'

const Data = () => {
    let heading = 'Featured Works'

    let cardData=[
        {
          index: 1,
          image: '../images/Xaragosa.png',
          title: 'Xaragosa \n the Dragon',
          desc: "A college graphic design project created in photoshop",
          project: "Art Piece",
          type: "PS",
          color: styles.adobePS,

          name: "Xaragosa"
        },
        {
          index: 2,
          image: '../images/TypeDictionary.png',
          title: 'Type \n Dictionary',
          desc: "A college booklet dictionary project created in indesign",
          project: "Booklet Piece",
          type: "ID",
          color: styles.adobeID,

          name: "Dictionary"
        },
        {
          index: 3,
          image: '../images/Heelys.png',
          title: 'Heely’s\n Comeback',
          desc: "A college webpage design project created in react",
          project: "Web App",
          type: "JS",
          color: styles.reactJS,

          name: "Heelys"
        },  
    ]

    return {
        cardData : cardData,
        heading : heading
    }
}
let get = new Data()

export default get