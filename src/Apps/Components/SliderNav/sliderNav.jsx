import React from 'react'
import './styles.scss'
import SVG from 'react-inlinesvg'
import Arrow from '../../../../images/Arrow.svg'

const SliderNav = props => {
  return (
    <div className="button_holder flx-b-c">
      <button onClick={props.Down}>
        <SVG src={Arrow} />
      </button>
      {props.Data.map(hit => {
        return (
          <input
            value={hit}
            type="button"
            className={props.Counter === hit ? 'inp-on' : 'inp-off'}
            onClick={props.Current}
          />
        )
      })}
      <button onClick={props.Up}>
        <SVG src={Arrow} />
      </button>
    </div>
  )
}

export default SliderNav
