import React, { useState } from 'react'
import './styles.scss'
import ProjectCard from './portfolio-cards/portfolioCards.jsx'
import PieceInfo from './portfolio-info/portfolioInfo.jsx'

const ProjectPiece = props => {
  let { data, pic, setPic, setInner, inner } = props
  const [infoState, setInfo] = useState(false)
  const [displayState, setDisplay] = useState(false)
  return (
    <div key={props.Index} className={props.OuterClass}>
      {infoState ? (
        <span
          className={`lightbox fix ${displayState ? `light-on` : `light-off`}`}
        ></span>
      ) : null}
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
            ? setInfo(true) |
              setInner(true) |
              setTimeout(() => setDisplay(true), 10)
            : null
        }
        Click2={() =>
          window.innerWidth < 1065
            ? setInfo(true) |
              setInner(true) |
              setTimeout(() => setDisplay(true), 10)
            : null
        }
      />
      {infoState ? (
        <PieceInfo
          pic={pic}
          inner={inner}
          setPic={setPic}
          Name={props.Name}
          Class={`${displayState ? `info_on` : `info_off`}`}
          data={data}
          Click={() => {
            setPic(1)
            setDisplay(false)
            setTimeout(() => setInfo(false) | setInner(false), 600)
          }}
        />
      ) : null}
    </div>
  )
}

export default ProjectPiece
