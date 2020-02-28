/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef } from 'react'
import './navstyles.scss'
import NavButton from '../../Components/NavButton/navButton.jsx'
import Loader from '../Loader/loader-container'
import { onResize } from '../../../utilities/globalUtilities'
import SVG from 'react-inlinesvg'

const Navigation = props => {
  let {
    setNav,
    navState,
    setClass,
    classState,
    setMobile,
    mobileState,
    zind,
    scroll,
    move,
    setHtag,
    setHome,
    tohome,
    setZ,
    opac,
    htag,
    step
  } = props

  useEffect(() => onResize(props, 1150))

  let openNav = () => {
    if (navState === false) {
      setZ(5)
      setNav(true)
      setTimeout(() => setClass(true), 50)
    } else if (navState === true) {
      setClass(false)
      setTimeout(() => {
        setNav(false)
        if (window.innerWidth >= 1150) setZ(0)
      }, 1000)
    }
  }

  return (
    <nav
      className={`navi flx-b-c fix
            ${`${scroll ? `nav-up` : `nav-down`}`}
        `}
      style={{ zIndex: mobileState ? 5 : zind }}
    >
      {mobileState ? (
        <SVG
          className={`nav_svg`}
          src={'../../../images/Logo.svg'}
          style={{ opacity: tohome ? 0 - opac : 1 }}
        />
      ) : (
        <h1
          className="page"
          style={{
            zIndex: zind + 1,
            opacity: opac
          }}
        >
          {htag}
        </h1>
      )}
      {mobileState ? (
        <span
          className="screen abs max-w"
          id="screenId"
          style={{ opacity: tohome ? -opac : 1 }}
        />
      ) : null}

      <NavButton
        Class={`nav ${move ? 'button-on' : 'button-off'}`}
        Click={openNav}
      />
    </nav>
  )
}

export default Navigation

/*this.state.setUl ? `list-out`: 'list-in'*/
//this.loadTime
