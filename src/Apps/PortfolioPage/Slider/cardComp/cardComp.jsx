import React from 'react'
import ProjectPiece from '../../../Components/portfolio/port-piece-holder'
import './styles.css'

const block = 'portwrap'

const CardComp = ({
  dec,
  inc,
  data,
  count,
  setCount,
  setPic,
  pic,
  className
}) => {
  return (
    <div className={`${block}`}>
      {data.map(hit => {
        if (hit.index >= dec && hit.index <= inc) {
          return (
            <ProjectPiece
              className={`${block}_cards ${className}`}
              Index={hit.index}
              Image={hit.image}
              Title={hit.title}
              Desc={hit.desc}
              Project={hit.project}
              Type={hit.type}
              Color={hit.color}
              Name={hit.name}
              data={hit.Inner}
              count={count}
              setCount={setCount}
              pic={pic}
              setPic={setPic}
            />
          )
        }
      })}
    </div>
  )
}

export default CardComp
