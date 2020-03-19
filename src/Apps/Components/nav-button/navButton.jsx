import React from 'react'
import SVG from 'react-inlinesvg'
import Menu from '../../../../images/MenuIcon.svg'
import './styles.css'

const block = `nav-button`

const NavButton = props => {
  let { button, move, setMove, setButton } = props
  return (
    <button
      id={props.Id}
      className={`${block} ${props.Class} ${move ? `${block}-on` : `${block}-off`}`}
      onClick={props.Click}
    >
      <svg className={`${block}_arc`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 239.9">
        <circle cx="120" cy="120" r="118.5" />
        <path d="M134.8,167.3A88.9,88.9,0,1,1,167.3,45.9,88.9,88.9,0,0,1,134.8,167.3Z" />
      </svg>
      <div className={`${block}_hamburger ${button ? `${block}-open` : `${block}-close`}`}>
        <SVG src={Menu} className={`${block}_bar`} style={{ margin: 0 }} />
        <span className={`${block}_bar`} />
        <span className={`${block}_bar`} />
      </div>
    </button>
  )
}

export default NavButton
