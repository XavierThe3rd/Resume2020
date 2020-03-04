import React from 'react'
import './styles.scss'
import SVG from 'react-inlinesvg'

const Mediums = ({ Icon }) => {
  return (
    <div className={`flex`}>
      {Icon.map(hit => (
        <div className={`mediums flex`}>
          <span className={`flex`}>
            <SVG className={`prime_icon`} src={hit.prime} />
          </span>
          <span className={` wrap column-b-s`}>
            {hit.secondary.map(hit => (
              <SVG src={hit} />
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Mediums
