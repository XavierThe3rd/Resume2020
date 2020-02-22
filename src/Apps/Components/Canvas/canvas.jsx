/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react'

import SVG from 'react-inlinesvg'
import Dragon from '../../../../images/Dragon.svg'
import BigRock from '../../../../images/BigRock.svg'
import MiddleRock from '../../../../images/MiddleRock.svg'
import SmallRock from '../../../../images/SmallRock.svg'
import GearW from '../../../../images/GearWholeWire.svg'
import GearH from '../../../../images/GearHalfWire.svg'
import GearQ from '../../../../images/GearQuarterWire.svg'
import GearQS from '../../../../images/GearQuarterWireS.svg'
import './styles.scss'

const Canvas = () => {
  let [mobileState, setMobile] = useState(false)
  let [scrollState, setScroll] = useState(false)
  let canRef = useRef(null)

  useEffect(() => {
    ;['resize', 'load'].forEach(event =>
      window.addEventListener(event, () => {
        window.innerWidth >= 1150
          ? setMobile(false)
          : setMobile(true) | setScroll(true)
      })
    )

    if (mobileState === true) {
      window.addEventListener('scroll', () => {
        let st = window.pageYOffset
        let gear = document.getElementsByClassName('gear')
        if (window.pageYOffset < 1000) {
          setScroll(true)
          for (let i = 0; i < gear.length; i++) {
            if (i < 4) {
              gear[i].style.transform = 'rotate(' + st / -2 + 'deg)'
            }
            if (i < 7 && i > 3)
              gear[i].style.transform = 'rotate(' + st / 4 + 'deg)'
            if (i === 7) gear[i].style.transform = 'rotate(' + st / 8 + 'deg)'
            if (i === 8) gear[i].style.transform = 'rotate(' + st / -4 + 'deg)'
            if (i === 9) gear[i].style.transform = 'rotate(' + st / 2 + 'deg)'
          }
        } else setScroll(false)
      })
    } else {
      window.addEventListener('scroll', () => {
        let st = window.pageYOffset
        canRef.current.style.transform = 'translateY(' + st / -10 + 'px)'
      })
    }
  })

  /*window.addEventListener('scroll', ()=> {
            let can = document.getElementById('canvas')
            //let clas = document.getElementsByClassName("opac-this")
            let st = window.pageYOffset
            can.style.transform = 'translateY('+ st/-10 +'px)'
            //for(let i=0; i < clas.length; i++) clas[i].style.opacity = 1 - st/400
        })*/

  let gearData = [
    GearQ,
    GearQS,
    GearQ,
    GearQ,
    GearH,
    GearH,
    GearH,
    GearW,
    GearH,
    GearQ
  ]
  return mobileState ? (
    <div
      ref={canRef}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    >
      <div className="flx-c abs" style={{ marginTop: 126, width: '100%' }}>
        {scrollState
          ? gearData.map(hit => <SVG src={hit} className="gear abs" />)
          : null}
      </div>
    </div>
  ) : (
    <div
      id="canvas"
      ref={canRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100em',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    >
      <SVG
        src={MiddleRock}
        style={{
          width: '20%',
          top: 150,
          left: 500,
          right: 0,
          //opacity: '0.11',
          //margin: '0 auto',
          zIndex: 1
        }}
      />
      <SVG
        src={BigRock}
        style={{
          width: '35%',
          //opacity: '0.1',
          top: -50,
          left: -100,
          zIndex: 1
        }}
      />
      <SVG
        src={SmallRock}
        style={{
          width: '10%',
          //opacity: '0.12',
          top: 600,
          left: 250,
          zIndex: 1
        }}
      />
      <SVG src={Dragon} className="dragon" />
    </div>
  )
}

export default Canvas
