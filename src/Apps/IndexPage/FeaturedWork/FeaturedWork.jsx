import React from "react";
import nl2br from 'react-newline-to-break';
import styles from './styles.scss'
import ProjectPiece from "../../Components/portfolioCards/portfolioPiece.jsx";


const FeaturedWork = ({Margin})=> {

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
        }
      ]

      return (
        <div className="featured_holder row" style={{marginTop: Margin}}>
          {cardData.map(hit => {
          return <ProjectPiece
              Class={`featured_cards`}
              Index={hit.index}
              Image={hit.image}
              Title= {nl2br(hit.title)}
              Desc={hit.desc}
              Project={hit.project}
              Type={hit.type}
              Color={hit.color}
              Name={hit.name}
            />})}
        </div>
    );  
}

export default FeaturedWork