import React from 'react'
import './styles.css'

const block = 'inpholder'

const Input = props => {
  let { setCursor } = props
  return (
    <label className={`${block}`}>
      <h4>{props.children}</h4>
      <input
        className={`${block}_input`}
        type="text"
        ref={props.ref}
        name={props.name}
        onChange={props.onChange}
        autoComplete="off"
        onMouseEnter={() => setCursor(true)}
        onMouseLeave={() => setCursor(false)}
      />
    </label>
  )
}

export default Input
