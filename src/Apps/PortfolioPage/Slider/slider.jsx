import React, { useCallback, useState } from 'react'
import CardComp from './cardComp/cardComp.jsx'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import {
  handleScroll,
  handleWheel,
  handleDomWheel
} from '../../../util/globalUtilities'
import './styles.css'

const block = 'port'

const Slider = props => {
  const { setPic, pic, data } = props
  let [scrollState, setScroll] = useState(0)
  let [outState, setOut] = useState(0)

  const callscroll = useCallback(
    e => {
      let st = window.pageYOffset
      setOut(st)
      if (window.innerWidth > 1030) {
        e.detail == 3 || e.wheelDelta < -1 ? setScroll(st) : null
      } else setScroll(st)
    },
    [setOut, setScroll]
  )
  handleScroll(callscroll)
  handleWheel(callscroll)
  handleDomWheel(callscroll)

  let Resize = () =>
    window.innerWidth > 1720
      ? 850
      : window.innerWidth > 1650
      ? 700
      : window.innerWidth > 1350
      ? 600
      : window.innerWidth > 1030
      ? 808
      : 1616

  let [size, setSize] = useState(Resize)

  let val = data.map(hit => hit.index)
  let total = Number.isInteger(val.length / 4)
    ? val.slice(0, val.length / 4)
    : val.slice(0, val.length / 4 + 1)

  return (
    <ContentBox
      Size={() => setSize(Resize)}
      className={`${block} ${props.Class} client`}
    >
      {total.map(hit => {
        return (
          <div className={`${block}_holder`} style={{ height: size }}>
            {scrollState > hit * size - (size + size / 2) ? (
              <CardComp
                className={`${
                  outState > hit * size - (size + size / 2)
                    ? `${block}_in`
                    : `${block}_out`
                }`}
                data={data}
                pic={pic}
                setPic={setPic}
                dec={hit * 4 - 3}
                inc={hit * 4}
              />
            ) : null}
          </div>
        )
      })}
    </ContentBox>
  )
}

export default Slider
