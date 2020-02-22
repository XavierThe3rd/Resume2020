/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef } from 'react'
import './linkstyles.scss'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'

const Loader = ({
  setNav,
  setClass,
  setHtag,
  setIndex,
  setAbout,
  setPort,
  index,
  about,
  port,
  indexState,
  aboutState,
  portState,
  setHome,
  setLoad,
  load,
  setLClass,
  linkclass,
  bars
}) => {
  let loadTime = e => {
    let ct = e.currentTarget
    let toLinks = (cls, name, i, a, p) => {
      if (ct.classList.contains(cls)) {
        setTimeout(() => {}, 450)
        setTimeout(
          () => {
            setHtag(name)
            ;setIndex(i) | setAbout(a) | setPort(p)
            window.scrollTo(0, 0)
          },
          500,
          ct
        )
      }
      if (ct.classList.contains('contact'))
        window.scrollTo(0, document.body.scrollHeight)
    }
    setLoad(true)
    setTimeout(() => setLClass(true), 100)
    setTimeout(() => setLClass(false), 750)
    setTimeout(() => setClass(false), 1250)

    toLinks('home', 'HOME', true, false, false)
    toLinks('about', 'ABOUT', false, true, false)
    toLinks('port', 'PORTFOLIO', false, false, true)
    setTimeout(
      () =>
        window.location.pathname === '/Resume/Home'
          ? setHome(true)
          : setHome(false),
      1500
    )
    setTimeout(() => {
      setLoad(false)
      setNav(false)
      setClass(false)
    }, 2000)
    return ct
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
              width: 300,
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
