import React from 'react'
import './styles.css'

const block = 'txtholder'

const TextArea = props => {
  let { setCursor } = props
  return (
    <div className={`${block} ${props.className}`}>
      <label className={`${block}_label`}>{props.children}</label>
      <textarea
        name={props.name}
        onChange={props.onChange}
        className={`${block}_textarea`}
        onMouseEnter={() => setCursor(true)}
        onMouseLeave={() => setCursor(false)}
      >
        {props.Thanks}
      </textarea>
    </div>
  )
}

export default TextArea
