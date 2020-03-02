/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.scss'
//import {headerData} from './headerData.js'
//import Wings from '../../../images/Wings.svg'
import SVG from 'react-inlinesvg'
import Navigation from './navigation/nav-container'
import Loader from './Loader/loader-container'
import { onResize } from '../../utilities/globalUtilities'
import { mobileScroll, deskScroll } from './header-utilities'

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
    mobileState,
    smoothScroll,
    setDist,
    dist,
    last,
    next,
    setLast,
    setNext
  } = props

  let opacRef = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      setStep(true)
      setZ(0)
      if (window.pageYOffset < 600) {
        setOpac(0)
        document.getElementById('spanId').style.opacity = 1
      }
    })
    window.onscroll = () => {
      setDist(window.pageYOffset)
      if (!navState) {
        if (mobileState) {
          tohome == true ? mobileScroll(props, 500) : mobileScroll(props, 72)
        } else {
          tohome == true ? deskScroll(props, 500) : deskScroll(props, 200)
        }
      }
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
        <div ref={opacRef} className="heading fix column">
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
            setOpac={setOpac}
            setZ={setZ}
            classState={classState}
            smoothScroll={smoothScroll}
            setStep={setStep}
            step={step}
          />
          }
        </ul>
      ) : null}
    </header>
  )
}

export default Header
