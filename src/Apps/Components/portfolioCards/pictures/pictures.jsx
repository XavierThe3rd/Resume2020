import React from 'react'
import SliderNav from '../../../PortfolioPage/Slider/SliderNav/sliderNav.jsx'

const Pictures = ({
  Name,
  Click,
  Class,
  data,
  count,
  setCount,
  setOutL,
  setOutR,
  setInL,
  setInR
}) => {
  let val
  data.map(hit => {
    val = hit.pictures.length
  })
  let total = Array.from(Array(val).keys())
  console.log(count)
  return (
    <div>
      {data.map(hit =>
        hit.pictures.map(hit => {
          if ((count = hit.index)) {
            return <img src={hit.pic} />
          }
        })
      )}
      <SliderNav
        count={count}
        setCount={setCount}
        setOutL={setOutL}
        setOutR={setOutR}
        setInL={setInL}
        setInR={setInR}
        Total={total}
      />
    </div>
  )
}

export default Pictures
