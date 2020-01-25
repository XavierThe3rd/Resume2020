import React from 'react'
import './styles.scss'

const Comps = ()=>{
    const Button = (props)=> {  
        return <button 
                className="prime_button flx-c-c" 
                onClick={props.Click}
                style={{
                    color: props.Color,
                    borderColor: props.Color
                }}>{props.children}</button>
    }
    const Title = (props)=> {  
        return <h1 style={{
            color: props.Color,
        }}>{props.children}</h1>
    }
    return {
        Button: Button,
        Title: Title
    }
}

const comps= new Comps()

export default comps

