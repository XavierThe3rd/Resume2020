import React from 'react'
import SVG from 'react-inlinesvg'
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
      <button
        onMouseEnter={() => setCursor(true)}
        onMouseLeave={() => setCursor(false)}
      >
        {hit.button}
      </button>
    </div>
  ))
}

export default Info
