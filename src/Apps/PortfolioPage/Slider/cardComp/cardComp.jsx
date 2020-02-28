import React from 'react'
import ProjectPiece from '../../../Components/portfolioCards/portfolioPiece.jsx'
import styles from './styles.scss'

const CardComp = ({
  dec,
  inc,
  data,
  setData,
  outStateR,
  outStateL,
  inStateR,
  inStateL
}) => {
  return (
    <div
      className={`port_wrap flex
    ${outStateR ? `fade-out-l` : inStateR ? `fade-in-r` : null} 
    ${outStateL ? `fade-out-r` : inStateL ? `fade-in-l` : null}`}
    >
      {data.map(hit => {
        if (hit.index >= dec && hit.index <= inc) {
          return (
            <ProjectPiece
              OuterClass={`port_card_holder`}
              Class={`port_card_set`}
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
        }
      })}
    </div>
  )
}

export default CardComp
