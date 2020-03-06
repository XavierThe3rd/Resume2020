import React from 'react'
import './styles.scss'
import Mediums from '../mediums/mediums.jsx'

const Info = ({ data }) => {
  return data.map(hit => (
    <div className={`info column`}>
      <h2>{hit.title}</h2>
      <span className={`line`}></span>
      <p>{hit.para}</p>
      <span className={`line`}></span>
      <h3>{hit.type}</h3>
      <Mediums Icon={hit.icons} />
      <span className={`line`}></span>
      <button className={`flx-c-c`}>{hit.button}</button>
    </div>
  ))
}

export default Info
