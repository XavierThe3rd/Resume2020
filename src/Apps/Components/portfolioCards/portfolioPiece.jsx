import React, { useState } from 'react'
import ProjectCard from './portfolioCards.jsx'
import PieceInfo from './portfolioInfo.jsx'

const ProjectPiece = props => {
  const [infoState, setInfo] = useState(false)
  const [displayState, setDisplay] = useState(false)
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
          Name={props.Name}
          Class={`${displayState ? `info_on` : `info_off`}`}
          Click={() =>
            setDisplay(false) | setTimeout(() => setInfo(false), 600)
          }
        />
      ) : null}
    </div>
  )
}

export default ProjectPiece
