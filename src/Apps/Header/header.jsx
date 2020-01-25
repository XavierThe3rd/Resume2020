import React from 'react'
import SVG from 'react-inlinesvg';
import './styles.scss'

const Header = ()=> {

    return(
        <header className="flx-c-c">
            <SVG src='../../../images/Logo.svg'/>
        </header>
    )
}

export default Header