import React from "react";

let SmallHamburger =({Click, Class})=>{

    let button_styles = {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
    }

    let span_styles = {
        background: '#ffffff',
        width: 30,
        height: 3,
        borderRadius: 1.5,
        margin: '3px 0'
    }

    let total = [1, 2, 3]

    return <button className={Class} style={button_styles} onClick={Click}>
        {total.map(total => <span key={total} style={span_styles}></span> )}
    </button>
}

export default SmallHamburger

