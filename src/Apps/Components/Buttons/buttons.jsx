import React from 'react'
import './styles.scss'

const Button = ({Title, Click})=> {
    return <button className="prime_button flx-c-c" onClick={Click}>{Title}</button>
}

export default Button