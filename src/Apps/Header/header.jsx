/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.scss'
//import {headerData} from './headerData.js'
//import Wings from '../../../images/Wings.svg'
import SVG from 'react-inlinesvg'
import Navigation from './navigation/nav-container'
import Loader from './Loader/loader-container'
import { onResize } from '../../utilities/globalUtilities'

//let get = new headerData()

const Header = props => {
  let {
    htag,
    zind,
    setOpac,
    setHtag,
    setHome,
    setNav,
    setClass,
    tohome,
    setMove,
    move,
    setScroll,
    scroll,
    opac,
    setZ,
    step,
    setStep,
    classState,
    navState,
    mobileState
  } = props

  let lsRef = useRef(0)
  let nsRef = useRef(0)
  let opacRef = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      setStep(true)
      if (window.pageYOffset < 600) {
        setOpac(0)
        document.getElementById('spanId').style.opacity = 1
      }
    })
    window.onscroll = () => {
      let st = window.pageYOffset
      let scrollSettings = (pagey, opacit) => {
        if (!navState) {
          if (window.innerWidth <= 1150) {
            if (tohome == true) setOpac(1 - st / 200)
            if (window.pageYOffset > pagey) {
              setStep(false)
              if (st >= lsRef.current) setScroll(true)
              else if (st < nsRef.current) setScroll(false)

              setTimeout(() => {
                lsRef.current = st
              }, 100)
              setTimeout(() => {
                nsRef.current = st - 50
              }, 100)
            } else {
              setStep(true)
              setScroll(false)
            }
          } else {
            setOpac(1 - st / opacit)
            window.pageYOffset > 800 ? setStep(false) : setStep(true)
            window.pageYOffset > 500 ? setMove(true) : setMove(false)
            opacRef.current.style.transform = 'translateY(' + st / -8 + 'px)'
          }
        }
      }
      if (tohome == true) {
        scrollSettings(500, 500)
      } else scrollSettings(72, 200)
    }
    onResize(props, 1150)
  })

  return (
    <header
      className={`column ${classState ? `nav-on` : `nav-off`} ${
        tohome ? `index_header` : `other_header`
      }`}
    >
      {step && (!mobileState || tohome) ? (
        <div
          ref={opacRef}
          className="heading fix column"
          //style={{ opacity: opac }}
        >
          <span id={`spanId`} style={{ opacity: opac }}>
            <SVG src={'../../../images/Logo.svg'} />
            {tohome ? (
              <div className="column">
                <h1>Providing Bold Intuitive Design and Programming</h1>
                <h1>Scroll Down to Learn More</h1>
              </div>
            ) : null}
          </span>
        </div>
      ) : null}
      <Navigation
        scroll={scroll}
        move={move}
        setHtag={setHtag}
        setHome={setHome}
        opac={opac}
        setZ={setZ}
        zind={zind}
        setNav={setNav}
        setClass={setClass}
        classState={classState}
        navState={navState}
        htag={htag}
        tohome={tohome}
        step={step}
      />
      {navState ? (
        <ul className={`fix column`}>
          <Loader
            setScroll={setScroll}
            setNav={setNav}
            setClass={setClass}
            setHtag={setHtag}
            setHome={setHome}
            setZ={setZ}
            classState={classState}
          />
          }
        </ul>
      ) : null}
    </header>
  )
}

export default Header
