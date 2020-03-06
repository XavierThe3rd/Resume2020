/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react'
import Arrow from '../../../../../images/Arrow.svg'
import styles from './styles.scss'
import SVG from 'react-inlinesvg'

const ProjectCard = props => {
  const [hoverState, setHover] = useState(false)
  const [widthState, setWidth] = useState(false)
  const [classState, setClass] = useState(false)
  let loadRef = useRef([Arrow])

  let project_card_styles = {
    cursor: 'pointer',
    transition: 'all 0.35s linear'
    //overflow: 'hidden',
  }

  let image_png_styles = {
    overflow: 'hidden',
    zIndex: 0
  }

  let screen_styles = {
    width: '100%',
    padding: '0 20px',
    zIndex: 1,
    transition: 'all 0.35s linear'
  }

  let divider_styles = {
    zIndex: 4
  }

  let title_styles = {}

  let inner_text_styles = {
    background: styles.primePurple,
    zIndex: 1,
    transition: 'all 0.35s linear'
  }

  let hover_span_styles = {
    //padding: '0px 0 10px'
  }

  let lower_span_styles = {
    background: styles.primePurple,
    zIndex: 3
  }

  let toInner = () => {
    classState === false
      ? setHover(true) | setTimeout(() => setClass(true), 10)
      : setClass(false) | setTimeout(() => setHover(false), 350)
  }

  useEffect(() => (window.innerWidth < 1000 ? setWidth(true) : setWidth(false)))

  return (
    <div
      className={`project_card column ${props.Class} ${
        classState ? `pc-on` : 'pc-off'
      }`}
      onClick={props.Click}
      onMouseEnter={() => setHover(true) | setTimeout(() => setClass(true), 10)}
      onMouseLeave={() =>
        setClass(false) | setTimeout(() => setHover(false), 350)
      }
      style={project_card_styles}
    >
      <span
        className={`image_png flx--e abs ${props.Class}`}
        style={image_png_styles}
      >
        <img className={`abs`} src={props.Image} alt="none" />
        <span className="screen flex abs" style={screen_styles} />
      </span>
      <span className="divider" style={divider_styles} />
      <h2 style={title_styles}>{props.Title}</h2>
      <div
        className="inner_text column"
        style={inner_text_styles}
        onClick={props.Click2}
      >
        {hoverState ? (
          <span className="column abs" style={hover_span_styles}>
            <p>{props.Desc}</p>
            <h4>CLICK TO LEARN MORE</h4>
          </span>
        ) : null}
      </div>
      <div className="column--c">
        <span className="lower_span row-b abs" style={lower_span_styles}>
          <h3 style={{ color: props.Color }}>{props.Project}</h3>
          <h3 style={{ color: props.Color }}>{props.Type}</h3>
        </span>
        {widthState ? (
          <button className="abs" onClick={toInner}>
            {
              //loadRef.current.map(item => (
              <SVG src={Arrow} />
              //))}
            }
          </button>
        ) : null}
      </div>
    </div>
  )
}
export default ProjectCard