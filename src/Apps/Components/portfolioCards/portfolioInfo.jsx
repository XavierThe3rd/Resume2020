import React from "react";
import styles from './styles/styles.scss'

const PieceInfo = ({Name, Click, Class})=>{
    let plate_styles = {
        display: 'flex',
        position: 'fixed',
        zIndex: 5,
        padding: 200,
        width: '100%', 
        height: '100%',
        top: 0,
        left: 0,
        transition: 'all 0.5s ease-in-out',
        background: styles.offWhite
    }

    //temps------------------
    let h_styles = {
        fontSize: 52,
        color: styles.primePurple
    }
    let b_styles = {
        background: styles.primeOrange,
        width: 100,
        height: 100,
        borderRadius: 50
    }

    //temps------------------


    return <div style={plate_styles} className={Class}>
        <span>
            <h4 style={h_styles}>{Name}</h4>
        </span>
        <button style={b_styles} onClick={Click}></button>
    </div> 
}

export default PieceInfo