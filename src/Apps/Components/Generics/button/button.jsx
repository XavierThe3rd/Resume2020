import React from 'react'
import './styles.scss'

const Button = props => {
  return (
    <button
      className="button flx-c-c"
      onClick={props.Click}
      style={props.Style}
    >
      {props.children}
    </button>
  )
}

export default Button
