import React from 'react'
import styles from './styles.scss'
import SVG from 'react-inlinesvg'
import { PropTypes } from 'mobx-react'

const SpecCards = props => {
  return (
    <div
      key={props.Index}
      className={`spec_card flex ${props.SpecClass}`}
      style={{
        cursor: 'pointer',
        background: styles.primePink
      }}
    >
      <div
        className={`screen_holder flx-c-c rel ${props.HoldClass}`}
        style={{
          overflow: 'hidden'
        }}
      >
        <div
          className={`flx-c-c ${props.HoldClass}`}
          style={{
            zIndex: 3
          }}
        >
          <h2>{props.Title}</h2>
          <SVG src={props.Image} />
        </div>
        <span
          className="screen abs"
          style={{
            right: 0,
            bottom: -20,
            background:
              'linear-gradient(325deg, rgb(97, 0, 255) 10%, rgba(97, 0, 255, 0) 80%)'
          }}
        />
      </div>
      <span className="text_holder abs">
        <p>{props.Para}</p>
      </span>
    </div>
  )
}

export default SpecCards
