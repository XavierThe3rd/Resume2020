import React from 'react'
import SVG from 'react-inlinesvg'
import Button from '../../../Generics/button/button-container'
import './styles.css'

const block = 'info'

const Info = ({ data, setCursor }) => {
  return data.map(hit => (
    <div className={`${block}`}>
      <h2>{hit.title}</h2>
      <span className={`${block}_line`}></span>
      <p>{hit.para}</p>
      <span className={`${block}_line`}></span>
      <h3>{hit.type}</h3>
      <div style={{ display: 'flex' }}>
        {hit.icons.map(hit => (
          <div className={`${block}_mediums`}>
            <span>
              <SVG src={hit.prime} />
            </span>
            <span>
              {hit.secondary.map(hit => (
                <SVG src={hit} />
              ))}
            </span>
          </div>
        ))}
      </div>
      <span className={`${block}_line`}></span>
      <a
        className={`button ${block}_button`}
        href={hit.button}
        target="_blank"
        onMouseEnter={() => setCursor(true)}
        onMouseLeave={() => setCursor(false)}
      >
        <svg
          className={`button_arc ${block}_arc`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 239.9 239.9"
        >
          <circle cx="120" cy="120" r="118.5" />
        </svg>
        <span className={`button_inner ${block}_inner`}>See Content!</span>
      </a>
    </div>
  ))
}

export default Info
