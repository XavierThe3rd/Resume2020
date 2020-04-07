import React, { useCallback } from 'react'
import { headScroll } from './heading-utilities'
import SVG from 'react-inlinesvg'
import './styles.css'
import logo from '../../../../images/Logo.svg'
import { handleLoad, handleScroll } from '../../../util/globalUtilities'

const block = `heading`

const Heading = props => {
  let {
    tohome,
    opac,
    step,
    setStep,
    setOpac,
    navState,
    dist,
    setDist,
    setHome
  } = props

  const callback = useCallback(() => headScroll(props), [props])
  const callload = useCallback(() => {
    window.location.pathname === '/Resume/Home' ? setHome(true) : setHome(false)
    window.scrollTo(0, 0)
    setStep(true)
  }, [props])
  handleLoad(callload)
  handleScroll(callback)
  let resize = window.innerWidth

  return step ? (
    <div className={`${block} ${props.className}`}>
      <span id={`spanId`} style={{ opacity: opac }}>
        {resize > 1030 || tohome ? (
          <SVG src={logo} className={`${block}_svg`} />
        ) : null}
        {tohome ? (
          <div className={`${block}_sub`}>
            <h1>Providing Bold Intuitive Design and Programming</h1>
            <h1>Scroll Down to Learn More</h1>
          </div>
        ) : null}
      </span>
    </div>
  ) : null
}

export default Heading
