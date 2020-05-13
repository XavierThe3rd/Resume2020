import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from './portfolio-cards/port-card-container'
import ProjectSpecs from './portfolio-info/portfolioInfo.jsx'
import './styles.css'

let block = 'piece'

const ProjectPiece = props => {
  let {
    data,
    pic,
    setPic,
    setBtNav,
    btNav,
    setButton,
    button,
    setCursor,
    setMove,
    setReq,
    req,
    move
  } = props
  let [info, setInfo] = useState(false)
  let [display, setDisplay] = useState(false)
  let pieceRef = useRef()
  useEffect(() => {
    if (btNav === true) {
      setPic(1)
      setReq(0)
      window.pageYOffset < 50 && window.innerWidth > 1030
        ? setMove(false)
        : null
      setBtNav(true)
      setDisplay(false)
      setTimeout(() => setInfo(false), 700)
    }
  })

  return (
    <div
      ref={pieceRef}
      key={props.Index}
      className={`${block} port-status ${props.className}`}
    >
      {info ? (
        <span
          className={`${block}_lightbox ${
            display ? `${block}-light_on` : `${block}-light_off`
          }`}
        ></span>
      ) : null}
      <ProjectCard
        Image={props.Image}
        Title={props.Title}
        Desc={props.Desc}
        data={data}
        Project={props.Project}
        Type={props.Type}
        Color={props.Color}
        Click={e => {
          pieceRef.current.classList.remove('port_in')
          setBtNav(false)
          setButton(!button)
          window.pageYOffset < 50 && window.innerWidth > 1030
            ? setMove(true)
            : null
          setTimeout(() => {
            setInfo(true)
            setTimeout(() => setDisplay(true), 10)
          }, 10)
        }}
      />
      {info ? (
        <ProjectSpecs
          pic={pic}
          req={req}
          data={data}
          setReq={setReq}
          setPic={setPic}
          setCursor={setCursor}
          Name={props.Name}
          className={`${display ? `${block}-info_on` : `${block}-info_off`}`}
          data={data}
        />
      ) : null}
    </div>
  )
}

export default ProjectPiece
