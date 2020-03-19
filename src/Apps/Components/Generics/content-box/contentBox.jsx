import './styles.css'
import React from 'react'

let block = 'box'

const ContentBox = props => {
  return (
    <div className={`${block} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  )
}

export default ContentBox
