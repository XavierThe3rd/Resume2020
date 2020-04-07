import React, { useCallback, useState } from 'react'
import { handleCursor } from '../../../util/globalUtilities'
import './styles.css'

let block = 'cursor'

const Cursor = ({ cursorState, setCursor }) => {
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)
  const callcursor = useCallback(
    e => {
      setX(e.clientX)
      setY(e.clientY - document.body.scrollTop)
    },
    [setX, setY]
  )
  handleCursor(callcursor)
  return (
    <div
      className={`${block} ${cursorState ? `${block}-on` : `${block}-off`}`}
      style={{ left: x, top: y }}
    ></div>
  )
}
export default Cursor
