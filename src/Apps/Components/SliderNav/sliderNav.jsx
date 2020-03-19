import React from 'react'
import './styles.css'
import SVG from 'react-inlinesvg'
import Arrow from '../../../../images/Arrow.svg'

const SliderNav = ({
  count,
  setCount,
  setPic,
  setOutL,
  setOutR,
  setInL,
  setInR,
  Total,
  inner,
  pic,
  data
}) => {
  let countProp = (typ, a, b) => {
    setOutR(a)
    setOutL(b)
    //scrollView.current.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      setCount(typ)
    }, 400)
    setTimeout(() => {
      setOutR(false)
      setInR(a)
      setOutL(false)
      setInL(b)
    }, 400)
    setTimeout(() => {
      setInR(false)
      setInL(false)
    }, 800)
  }

  return inner ? (
    <div className={`pic-button_holder flx-e-c`}>
      {data.map(hit =>
        hit.pictures.map(hit => {
          return (
            <button
              value={hit.index}
              className={`${pic + 1 === hit.index + 1 ? 'img-on' : 'img-off'}`}
              onClick={e => setPic(hit.index)}
            >
              <img src={hit.pic} />
            </button>
          )
        })
      )}
    </div>
  ) : (
    <div className="button_holder flx-b-c">
      <button
        onClick={() => {
          if (count > 1) countProp(count - 1, true, false)
        }}
      >
        <SVG src={Arrow} />
      </button>
      {Total.map(hit => {
        return (
          <input
            value={hit + 1}
            type="button"
            className={count === hit ? 'inp-on' : 'inp-off'}
            onClick={e => countProp(Number(e.currentTarget.value), false, true)}
          />
        )
      })}
      <button
        onClick={() => {
          if (count < Total.length) countProp(count + 1, false, true)
        }}
      >
        <SVG src={Arrow} />
      </button>
    </div>
  )
}

export default SliderNav
