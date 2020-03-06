import React from 'react'
import './styles.scss'
import SVG from 'react-inlinesvg'
import Info from './info/info.jsx'
import Pictures from './pictures/pictures.jsx'
import Close from '../../../../../images/Close.svg'

const PieceInfo = ({ Name, Click, Class, data, pic, setPic, inner }) => {
  return (
    <section className={`info_holder fix flx-c-c ${Class}`}>
      <div className={`port_info flx-b`}>
        <button onClick={Click} className={`close abs`}>
          <SVG src={Close} />
        </button>
        <Info data={data} />
        <Pictures data={data} pic={pic} setPic={setPic} inner={inner} />
      </div>
    </section>
  )
}

export default PieceInfo
