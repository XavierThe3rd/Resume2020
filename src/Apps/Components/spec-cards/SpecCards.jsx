import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { onResize } from '../../../utilities/globalUtilities'
import './styles.css'

let block = 'spec'

const SpecCards = props => {
  return (
    <div key={props.Index} className={`${block} ${props.className}`}>
      <span className={`${block}_text`}>
        <p>{props.Para}</p>
      </span>
      <div className={`${block}_holder`}>
        <span className={`${block}_title`}>
          <h2>{props.Title}</h2>
          <SVG src={props.Image} />
        </span>
        <span className={`${block}_screen`} />
      </div>
    </div>
  )
}

export default SpecCards
