import React from 'react'
import './styles.css'

const block = 'inpholder'

const Input = props => {
  let { setCursor } = props
  return (
    <div className={`${block}`}>
      <input
        className={`${block}_input`}
        type="text"
        ref={props.ref}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
        onMouseEnter={() => setCursor(true)}
        onMouseLeave={() => setCursor(false)}
      />
      <label className={`${block}_label`}>{props.children}</label>
    </div>
  )
}

export default Input
