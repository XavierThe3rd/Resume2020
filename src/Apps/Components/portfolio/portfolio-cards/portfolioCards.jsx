import React from 'react'
import ReactFitText from 'react-fittext'
import './styles.css'

let block = 'project'

const ProjectCard = props => {
  let { setCursor } = props
  let wind = window.innerWidth

  return (
    <div className={`${block}`}>
      <div className={`${block}_picture`}>
        <img src={props.Image} alt="none" />
        <span className={`${block}_screen`} />
      </div>
      <div className={`${block}_text`}>
        <ReactFitText compressor={wind > 600 ? 0.55 : 0.5}>
          <h2>{props.Title}</h2>
        </ReactFitText>
        <span
          className={`${block}_span`}
          onClick={props.Click}
          onMouseEnter={() => setCursor(true)}
          onMouseLeave={() => setCursor(false)}
        >
          <ReactFitText compressor={wind < 1350 && wind > 600 ? 2 : 1.35}>
            <p>{props.Desc}</p>
          </ReactFitText>
          <ReactFitText
            compressor={wind > 1350 ? 1.1 : wind < 1350 && wind > 600 ? 2 : 1.2}
          >
            <h4>CLICK TO LEARN MORE!</h4>
          </ReactFitText>
        </span>
      </div>
      <ReactFitText compressor={wind < 1350 && wind > 600 ? 1.5 : 1.2}>
        <span className={`${block}_medium`}>
          <h3 style={{ color: props.Color }}>{props.Project}</h3>
          <h3 style={{ color: props.Color }}>{props.Type}</h3>
        </span>
      </ReactFitText>
    </div>
  )
}
export default ProjectCard
