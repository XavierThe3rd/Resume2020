import React, { useState } from 'react'
import text from '../Generics/text-elms/text-elms.jsx'
import SVG from 'react-inlinesvg'
import Arrow from '../../../../images/Arrow.svg'
import './styles.css'

const block = 'option'

const Option = props => {
  let { setCursor } = props
  let [optionState, setOption] = useState(false)
  let [classState, setClass] = useState(false)

  return (
    <div>
      <div
        key={props.Key}
        id={`Option`}
        className={`${block} ${props.Class} ${
          optionState ? `${block}-on` : `${block}-off`
        }`}
      >
        <button
          className={`${block}_button`}
          onMouseEnter={() => setCursor(true)}
          onMouseLeave={() => setCursor(false)}
          onClick={() => {
            if (!optionState) {
              setOption(true)
              setClass(true)
            } else {
              setClass(false)
              setTimeout(() => setOption(false), 350)
            }
          }}
        >
          <text.SubHeader>{props.Title}</text.SubHeader>
          <SVG src={Arrow} />
        </button>
      </div>
      {optionState ? (
        <iframe
          className={`${block}_docs ${
            classState ? `${block}-in` : `${block}-out`
          }`}
          src={props.Search}
          style={{ background: '#ffffff' }}
          top-toolbar-height="56"
          javascript="allow"
          full-frame=""
        />
      ) : null}
    </div>
  )
}

export default Option
