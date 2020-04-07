import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

let block = 'button'

const Button = props => {
  const { setCursor } = props
  return (
    <Link
      to={props.to}
      href={props.href}
      target={props.target}
      className={`${block} ${props.Class}`}
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
      onClick={props.Click}
      type={props.type}
    >
      <svg
        className={`${block}_arc`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 239.9 239.9"
      >
        <circle cx="120" cy="120" r="118.5" style={{ stroke: props.stroke }} />
      </svg>
      <span
        className={`${block}_inner ${props.className}`}
        style={{ background: props.stroke, color: props.color }}
      >
        {props.children}
      </span>
    </Link>
  )
}

export default Button
