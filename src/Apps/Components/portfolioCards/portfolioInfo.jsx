import React from 'react'
import styles from './styles/styles.scss'
import './info.scss'
import SVG from 'react-inlinesvg'
import Mediums from './mediums/mediums.jsx'
import Info from './info/info.jsx'
import SliderNav from '../../PortfolioPage/Slider/SliderNav/sliderNav.jsx'
import Pictures from './pictures/pictures.jsx'

const PieceInfo = ({
  Name,
  Click,
  Class,
  data,
  count,
  setCount,
  setOutL,
  setOutR,
  setInL,
  setInR
}) => {
  return (
    <section className={`info_holder fix flx-c-c ${Class}`}>
      <div className={`port_info flx-b`}>
        <Info data={data} />
        <Pictures data={data} count={count} setCount={setCount} />
      </div>
    </section>
  )
}

export default PieceInfo
