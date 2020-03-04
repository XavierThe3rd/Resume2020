import React, { useState } from 'react'
import ProjectCard from './portfolioCards.jsx'
import PieceInfo from './portfolioInfo.jsx'

const ProjectPiece = props => {
  let { data, count, setCount } = props
  const [infoState, setInfo] = useState(true)
  const [displayState, setDisplay] = useState(true)
  return (
    <div key={props.Index} className={props.OuterClass}>
      <ProjectCard
        Class={props.Class}
        Image={props.Image}
        Title={props.Title}
        Desc={props.Desc}
        Project={props.Project}
        Type={props.Type}
        Color={props.Color}
        Click={() =>
          window.innerWidth > 1065
            ? setInfo(true) | setTimeout(() => setDisplay(true), 10)
            : null
        }
        Click2={() =>
          window.innerWidth < 1065
            ? setInfo(true) | setTimeout(() => setDisplay(true), 10)
            : null
        }
      />
      {infoState ? (
        <PieceInfo
          count={count}
          setCount={setCount}
          Name={props.Name}
          Class={`${displayState ? `info_on` : `info_off`}`}
          data={data}
          Click={() =>
            setDisplay(false) | setTimeout(() => setInfo(false), 600)
          }
        />
      ) : null}
    </div>
  )
}

export default ProjectPiece
