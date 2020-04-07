import React, { useState } from 'react'
import './styles.css'
import Loading from '../../../loading/loading.jsx'

const block = 'pictures'

const Pictures = ({ data, pic, setPic, setCursor }) => {
  let [loadState, setLoad] = useState(false)

  return (
    <div className={`${block}`}>
      {data.map(hit =>
        hit.pictures.map(hit => {
          if (hit.index === pic) {
            return (
              <span className={`${block}_holder`}>
                {loadState ? null : (
                  <div className={`${block}_screen`}>
                    <Loading className={`${block}_load`} />
                  </div>
                )}
                <img
                  className={``}
                  src={hit.pic}
                  onLoad={() => setLoad(true)}
                />
              </span>
            )
          }
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
                {loadState ? null : <Loading />}
                <img src={hit.pic} onLoad={() => setLoad(true)} />
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Pictures
