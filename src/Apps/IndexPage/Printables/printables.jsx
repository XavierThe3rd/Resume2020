import React, { useState } from 'react'
import Option from '../../Components/options/options.jsx'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import styles from './styles.scss'
import Embeder from '../../Components/Generics/embeder/embeder.jsx'

const Printables = props => {
  const { setOption, option, setClass, clazz, data } = props
  const [widthState, setWidth] = useState(true)

  window.addEventListener('load', () => {
    setWidth(window.innerWidth)
  })
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })
  return (
    <div className={`prints column ${props.Class}`}>
      <text.Title Color={styles.pureWhite}>Printed Documents</text.Title>
      {data.map(hit => {
        return (
          <Option
            Key={hit.index}
            Title={hit.title}
            setOption={setOption}
            option={option}
            setClass={setClass}
            clazz={clazz}
          >
            <Embeder
              Class={`docs ${clazz ? `pdf-on` : `pdf-off`}`}
              Search={hit.search}
            />
          </Option>
        )
      })}
    </div>
  )
}

export default Printables
