import React, { useState } from 'react'
import text from '../Generics/text-elms/text-elms.jsx'
import styles from './styles.scss'
import SVG from 'react-inlinesvg'
import Arrow from '../../../../images/Arrow.svg'

const Option = props => {
  const { setClass, clazz } = props
  let [optionState, setOption] = useState(false)
  localStorage.setItem('optionState', optionState)

  return (
    <div
      key={props.Key}
      id={`Option`}
      className={`option column max-w ${props.Class} ${
        optionState ? `op-on` : `op-off`
      }`}
    >
      <button
        className="flx-b-c max-w"
        onClick={() => {
          setOption(!optionState)
          setTimeout(() => setClass(!clazz), 750)
          console.log(clazz)
        }}
      >
        <text.SubHeader>{props.Title}</text.SubHeader>
        <SVG src={Arrow} />
      </button>
      <div className={`max-w obj-holder`}>
        {optionState ? props.children : null}
      </div>
    </div>
  )
}

export default Option
