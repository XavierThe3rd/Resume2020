import React, { useCallback } from 'react'
import SVG from 'react-inlinesvg'
import NavButton from '../../Components/nav-button/navbutton-container'
import { navScroll } from './nav-utilities'
import logo from '../../../../images/Logo.svg'
import { handleScroll } from '../../../util/globalUtilities'
import './styles.css'

const block = `nav`

const Navigation = props => {
  let {
    setNav,
    navState,
    setClass,
    classState,
    setScroll,
    scroll,
    setMove,
    move,
    tohome,
    opac,
    htag,
    setLast,
    setNext,
    dist,
    setDist,
    button,
    setButton,
    btNav,
    setBtNav
  } = props

  const callscroll = useCallback(() => navScroll(props), [props])
  handleScroll(callscroll)

  let resize = window.innerWidth

  return (
    <nav
      className={`${block} ${props.className}
            ${`${!scroll || !btNav ? `nav-down` : `nav-up`}`}
        `}
    >
      {resize < 1030 ? (
        <SVG
          className={`${block}_svg`}
          src={logo}
          style={{ opacity: tohome ? -opac : 1 }}
        />
      ) : (
        <h1
          className={`${block}_page ${move ? `${block}_on` : `${block}_off`}`}
          style={{ opacity: navState ? 1 : opac }}
        >
          {htag}
        </h1>
      )}
      {resize < 1030 ? <span className={`${block}_screen`} /> : null}
      <NavButton
        button={button}
        setButton={setButton}
        move={move}
        setMove={setMove}
        Class={`${block}_button`}
        Click={() => {
          if (btNav === true) {
            setButton(!button)
            if (navState === false) {
              setNav(true)
              setTimeout(() => setClass(true), 50)
            } else if (navState === true) {
              setClass(false)
              setTimeout(() => setNav(false), 1000)
            }
          } else {
            setButton(!button)
            setBtNav(true)
          }
        }}
      />
    </nav>
  )
}

export default Navigation
