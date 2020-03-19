import React, { useState, useEffect } from 'react'
import './styles.css'
import ProjectCard from './portfolio-cards/port-card-container'
import ProjectSpecs from './portfolio-info/portfolioInfo.jsx'

let block = 'piece'
let defaulter = e => e.preventDefault()

const ProjectPiece = props => {
  let { data, pic, setPic, setBtNav, btNav, setButton, button } = props
  let [info, setInfo] = useState(false)
  let [display, setDisplay] = useState(false)

  useEffect(() => {
    if (btNav === true) {
      setPic(1)
      setBtNav(true)
      setDisplay(false)
      setTimeout(() => setInfo(false), 700)
      /*document.querySelector('body').removeEventListener('touchmove', defaulter, {
        passive: false
      })*/
    }
  })

  return (
    <div key={props.Index} className={`${block} ${props.OuterClass}`}>
      {info ? (
        <span
          className={`${block}_lightbox ${display ? `${block}-light_on` : `${block}-light_off`}`}
        ></span>
      ) : null}
      <ProjectCard
        Image={props.Image}
        Title={props.Title}
        Desc={props.Desc}
        Project={props.Project}
        Type={props.Type}
        Color={props.Color}
        Click={() => {
          setBtNav(false)
          setButton(!button)
          setTimeout(() => {
            setInfo(true)
            setTimeout(() => setDisplay(true), 10)
            /*document.querySelector('body').addEventListener('touchmove', defaulter, {
              passive: false
            })*/
          }, 10)
        }}
      />
      {info ? (
        <ProjectSpecs
          pic={pic}
          setPic={setPic}
          Name={props.Name}
          className={`${display ? `${block}-info_on` : `${block}-info_off`}`}
          data={data}
        />
      ) : null}
    </div>
  )
}

export default ProjectPiece
