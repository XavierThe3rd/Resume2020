import React from "react";
import nl2br from 'react-newline-to-break';
import styles from './styles.scss'
import ProjectPiece from "../../Components/portfolioCards/portfolioPiece.jsx";
import get from './data.js'
import comps from "../../Components/U-Components/u-components.jsx";
import { style } from "@material-ui/system";


const FeaturedWork = ()=> {
      return (
        <div className="featured column">
          <comps.Title Color={styles.conColor}>{get.heading}</comps.Title>
          <div className="featured_holder row">
          {get.cardData.map(hit => {
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
        </div>
    );  
}

export default FeaturedWork