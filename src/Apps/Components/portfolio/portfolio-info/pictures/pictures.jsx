import React, { useCallback, useEffect } from 'react'
import styles from './styles.css'
import Loading from '../../../loading/loading.jsx'
import { EMPTY } from 'rxjs'

const block = 'pictures'

const Pictures = ({ data, pic, setPic, setCursor }) => {
  return (
    <div className={`${block}`}>
      {data.map(hit =>
        hit.pictures.map(hit => {
          return hit.index === pic ? (
            <span className={`${block}_holder`}>
              <div
                className={`${block}_sprite ${block}_spritebut`}
                style={{
                  backgroundImage: `url(` + hit.picture + `)`,
                  boxShadow: `black inset 0 0 4px 0px`
                }}
              />
            </span>
          ) : null
        })
      )}
      <div className={` ${block}_slider`}>
        {data.map(hit =>
          hit.pictures.map(hit => {
            return (
              <button
                value={hit.index}
                className={`${
                  pic + 1 === hit.index + 1 ? 'img-on' : 'img-off'
                }`}
                onMouseEnter={() => setCursor(true)}
                onMouseLeave={() => setCursor(false)}
                onClick={e => setPic(hit.index)}
              >
                <div
                  className={`${block}_sprite`}
                  style={{
                    backgroundImage: `url(` + hit.picture + `)`,
                    backgroundSize: `cover`
                  }}
                />
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Pictures
