import React from 'react'
import './styles.css'

let block = 'button'

const Button = props => {
  return (
    <button className={`${block}`} onClick={props.Click} style={props.style}>
      {props.children}
    </button>
  )
}

export default Button
