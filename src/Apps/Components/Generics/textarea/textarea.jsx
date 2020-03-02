import React from 'react'
import './styles.scss'

const TextArea = props => {
  return (
    <div className="text_hold column max-w">
      <label className="flx--c">{props.children}</label>
      <textarea />
    </div>
  )
}

export default TextArea
