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
    >
      {/*<svg className={`${block}_arc`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 239.9">
        <circle cx="120" cy="120" r="118.5" />
      </svg>
  <span className={`${block}_point`} />*/}
    </div>
  )
}
export default Cursor
