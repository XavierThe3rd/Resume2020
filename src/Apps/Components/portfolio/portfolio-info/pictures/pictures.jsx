import React from 'react'
import './styles.scss'
import SliderNav from '../../../SliderNav/sliderNav.jsx'

const Pictures = ({ data, pic, setPic, inner }) => {
  //let val

  console.log(pic)
  //let total = Array.from(Array(val).keys())
  return (
    <div className={`picture_holder column--e`}>
      {data.map(hit =>
        hit.pictures.map(hit => {
          if (hit.index === pic) {
            return (
              <span className={`flx-c-c`}>
                <img className={``} src={hit.pic} />
              </span>
            )
          }
        })
      )}
      <SliderNav pic={pic} setPic={setPic} data={data} inner={inner} />
    </div>
  )
}

export default Pictures
