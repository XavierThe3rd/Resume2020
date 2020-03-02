import React from 'react'
import styles from './styles.scss'
import ProjectPiece from '../../Components/portfolioCards/portfolioPiece.jsx'
import get from './data.js'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import Button from '../../Components/Generics/button/button.jsx'

const FeaturedWork = props => {
  return (
    <div className={`featured column ${props.Class}`}>
      <text.Title Color={styles.conColor}>{get.heading}</text.Title>
      <div className="featured_holder flex">
        {get.cardData.map(hit => {
          return (
            <ProjectPiece
              Class={`featured_card_set`}
              Index={hit.index}
              Image={hit.image}
              Title={hit.title}
              Desc={hit.desc}
              Project={hit.project}
              Type={hit.type}
              Color={hit.color}
              Name={hit.name}
            />
          )
        })}
      </div>
      <Button
        Click={() => console.log('button was clicked')}
        Color={styles.conColor}
      >
        Learn More!
      </Button>
    </div>
  )
}

export default FeaturedWork
