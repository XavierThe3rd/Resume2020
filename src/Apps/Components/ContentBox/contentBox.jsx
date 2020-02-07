import './styles.scss';
import React from "react";

const ContentBox = (props) => {
    let intro_styles = {
        alignItems: props.Align,
        background: props.Background,
        position: props.Pos
    }
    
    return(
        <div className={`intro column ${props.Class}`} style={intro_styles}>
            {props.children}
        </div>
    )   
}

export default ContentBox