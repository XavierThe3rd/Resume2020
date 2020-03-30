import React, { useCallback } from 'react'
import { handleResize } from '../../../../util/globalUtilities'
import './styles.css'

let block = 'box'

const ContentBox = props => {
  let call = useCallback(props.Size, [props.Size])
  handleResize(call)
  return (
    <div
      className={`${block} ${props.className}`}
      id={props.id}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export default ContentBox
