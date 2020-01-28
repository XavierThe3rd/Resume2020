import React from "react";

let SmallHamburger =(props)=>{

    let button_styles = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: props.bWidth,
        height: props.bHeight,
    }

    let span_styles = {
        background: '#ffffff',
        width: props.sWidth,
        height: props.sHeight,
        borderRadius: 1.5,
        margin: props.sMarg
    }

    let total = [1, 2, 3]

    return <button className={props.Class} style={button_styles} onClick={props.Click}>
        {total.map(total => <span key={total} style={span_styles}></span> )}
    </button>
}

export default SmallHamburger

