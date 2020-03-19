import React from 'react'
import './styles.css'

const block = 'pictures'

const Pictures = ({ data, pic, setPic }) => {
  return (
    <div className={`${block}`}>
      {data.map(hit =>
        hit.pictures.map(hit => {
          if (hit.index === pic) {
            return (
              <span className={`${block}_holder`}>
                <img className={``} src={hit.pic} />
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
                className={`${pic + 1 === hit.index + 1 ? 'img-on' : 'img-off'}`}
                onClick={e => setPic(hit.index)}
              >
                <img src={hit.pic} />
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Pictures
