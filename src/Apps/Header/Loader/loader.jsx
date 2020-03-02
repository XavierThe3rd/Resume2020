/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef } from 'react'
import './linkstyles.scss'
import { Link } from 'react-router-dom'
import { toLinks, resetPage, resetProps } from './loader-utilities'
import SVG from 'react-inlinesvg'

const Loader = props => {
  let {
    setNav,
    setClass,
    setHtag,
    setIndex,
    setAbout,
    setPort,
    setZ,
    index,
    about,
    port,
    indexState,
    aboutState,
    portState,
    setHome,
    setOpac,
    setLoad,
    setScroll,
    load,
    setLClass,
    linkclass,
    bars,
    smoothScroll,
    setStep,
    step
  } = props

  let loadTime = e => {
    setScroll(true)
    setLoad(true)
    setTimeout(() => setLClass(true), 100)
    toLinks(props, e, 'home', 'HOME', true, false, false, 500)
    toLinks(props, e, 'about', 'ABOUT', false, true, false, 500)
    toLinks(props, e, 'port', 'PORTFOLIO', false, false, true, 500)
    setTimeout(() => setLClass(false), 750)
    setTimeout(() => setClass(false), 1250)
    setTimeout(() => resetPage(props), 1500)
    setTimeout(() => resetProps(props), 2000)
  }

  return load
    ? bars.map(hit => {
        return (
          <SVG
            src={hit}
            className={`load fix ${linkclass ? `load-on` : `load-out`}`}
            style={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 6,
              margin: 'auto'
            }}
          />
        )
      })
    : indexState
    ? index.map(hit => {
        return (
          <li key={hit.ind}>
            <Link to={hit.ref} className={hit.cls} onClick={loadTime}>
              {hit.tag}
            </Link>
          </li>
        )
      })
    : aboutState
    ? about.map(hit => {
        return (
          <li key={hit.ind}>
            <Link to={hit.ref} className={hit.cls} onClick={loadTime}>
              {hit.tag}
            </Link>
          </li>
        )
      })
    : portState
    ? port.map(hit => {
        return (
          <li key={hit.ind}>
            <Link to={hit.ref} className={hit.cls} onClick={loadTime}>
              {hit.tag}
            </Link>
          </li>
        )
      })
    : null
}

export default Loader
