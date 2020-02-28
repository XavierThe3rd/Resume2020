import React, { useState, useEffect, useRef } from 'react'

//import SVG from 'react-inlinesvg'
/*
import Dragon from '../../../../images/Dragon.svg'
import BigRock from '../../../../images/BigRock.svg'
import MiddleRock from '../../../../images/MiddleRock.svg'
import SmallRock from '../../../../images/SmallRock.svg'
import GearW from '../../../../images/GearWholeWire.svg'
import GearH from '../../../../images/GearHalfWire.svg'
import GearQ from '../../../../images/GearQuarterWire.svg'
import GearQS from '../../../../images/GearQuarterWireS.svg'
*/
import inferno from '../../../../images/Inferno.png'
import './styles.scss'
/*this.state = { loadedItems: [] }
}  onLoad(feedItem) {
  this.setState(({ loadedItems }) => {
    //return { loadedItems: loadedItems.concat(feedItem) }*/

const Canvas = () => {
  let [mobileState, setMobile] = useState(false)
  let [scrollState, setScroll] = useState(false)
  const [loadState, setLoad] = useState(false)
  let canRef = useRef(null)
  let loadRef = useRef([inferno])

  useEffect(() => {
    ;['resize', 'load'].forEach(event =>
      window.addEventListener(event, () => {
        window.innerWidth >= 1150
          ? setMobile(false)
          : setMobile(true) | setScroll(true)
      })
    )

    window.addEventListener('scroll', () => {
      let st = window.pageYOffset
      canRef.current.style.transform = 'translateY(' + st / -20 + 'px)'
    })
    window.onLoad = feedItem => {
      loadRef.current = loadedItems => {
        return { loadedItems: loadedItems.concat(feedItem) }
      }
    }
  })
  return (
    <div
      className={`canvas`}
      ref={canRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '110em',
        top: 0,
        //left: 0,
        zIndex: -1
      }}
    >
      {loadRef.current.map(item => (
        <img
          //ref={canRef}
          src={item}
          style={{
            position: 'fixed',
            top: 0
            //left: 0
          }}
        />
      ))}
    </div>
  )
}
export default Canvas
