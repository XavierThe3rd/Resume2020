import React, { useCallback } from 'react'
import { headScroll } from './heading-utilities'
import SVG from 'react-inlinesvg'
import './styles.css'
import logo from '../../../../images/Logo.svg'
import { handleScroll } from '../../../utilities/globalUtilities'
import { useEffect } from 'react'

const block = `heading`

const Heading = props => {
  let { tohome, opac, step, setStep, setOpac, navState, dist, setDist } = props

  useEffect(() => {
    window.addEventListener('load', () => setStep(true))
  })

  const callback = useCallback(() => headScroll(props), [props])
  handleScroll(callback)
  let resize = window.innerWidth

  return step && tohome ? (
    <div className={`${block} ${props.className}`}>
      <span id={`spanId`} style={{ opacity: opac }}>
        <SVG src={logo} className={`${block}_svg`} />
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
