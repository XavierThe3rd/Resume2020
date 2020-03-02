import React from 'react'
import './styles.scss'

const Input = props => {
  return (
    <div className="inp_hold max-w" style={{ height: 52 }}>
      <input type="text" autoComplete="off" />
      <label className="flx--c abs">{props.children}</label>
    </div>
  )
}

export default Input
