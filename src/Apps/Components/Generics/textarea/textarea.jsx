import React from 'react'
import './styles.css'

const block = 'txtholder'

const TextArea = props => {
  let { setCursor } = props
  return (
    <label className={`${block}`}>
      {props.children}
      <textarea
        name={props.name}
        onChange={props.onChange}
        className={`${block}_textarea`}
        onMouseEnter={() => setCursor(true)}
        onMouseLeave={() => setCursor(false)}
      >
        {props.Thanks}
      </textarea>
    </label>
  )
}

export default TextArea
