/* eslint-disable no-unused-expressions */
import './styles.scss'
import React, { useEffect } from 'react'
import SliderNav from '../../Components/SliderNav/sliderNav.jsx'
import { onResize } from '../../../utilities/globalUtilities'
import CardComp from './cardComp/cardComp.jsx'
import ScrollComp from './cardComp/scrollComp.jsx'
import text from '../../Components/Generics/text-elms/text-elms.jsx'

const Slider = props => {
  //const scrollView = useRef(null)
  const {
    outStateR,
    setOutR,
    outStateL,
    setOutL,
    inStateR,
    setInR,
    inStateL,
    setInL,
    mobileState,
    setMobile,
    setCount,
    count,
    setPic,
    pic,
    data,
    setData,
    inner,
    setInner
  } = props

  let val = data.map(hit => hit.index)
  let total = Number.isInteger(val.length / 6)
    ? val.slice(0, val.length / 6)
    : val.slice(0, val.length / 6 + 1)

  useEffect(() => {
    onResize(props, 1000)
  })

  return (
    <div /*style={{ height: 10442 }}*/>
      <div className={`port_holder column ${props.Class}`}>
        <text.Title>My Works</text.Title>
        {!mobileState ? (
          val.map(hit => {
            if (count === hit)
              return (
                <CardComp
                  dec={[hit * 6 - 5]}
                  inc={hit * 6}
                  data={data}
                  outStateR={outStateR}
                  outStateL={outStateL}
                  inStateR={inStateR}
                  inStateL={inStateL}
                  setInner={setInner}
                  inner={inner}
                  setOutL={setOutL}
                  setOutR={setOutR}
                  setInL={setInL}
                  setInR={setInR}
                  count={count}
                  setCount={setCount}
                  pic={pic}
                  setPic={setPic}
                />
              )
          })
        ) : (
          <ScrollComp
            data={data}
            total={total}
            count={count}
            setCount={setCount}
          />
        )}
        {!mobileState ? (
          <SliderNav
            count={count}
            setCount={setCount}
            setOutL={setOutL}
            setOutR={setOutR}
            setInL={setInL}
            setInR={setInR}
            Total={total}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Slider
