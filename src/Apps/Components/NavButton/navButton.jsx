import React from 'react'
import './styles.scss'


const NavButton = (props)=> {
    return <button 
            id={props.Id} 
            className={`flx-c-c ${props.Class}`}
            onClick={props.Click}
            >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 239.9">
            <circle cx="120" cy="120" r="118.5"/>
            <path d="M134.8,167.3A88.9,88.9,0,1,1,167.3,45.9,88.9,88.9,0,0,1,134.8,167.3Z"/>
        </svg>
        <div className="hamburger column-b-c abs">
            <span></span><span></span><span></span>
        </div>
    </button> 
}

export default NavButton