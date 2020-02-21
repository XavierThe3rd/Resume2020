import './styles.scss';
import React from "react";

const ContentBox = (props) => {
    let intro_styles = {
        alignItems: props.Align,
        background: props.Background,
        position: props.Pos,
        height: props.Height,
        margin: props.Margin
    }
    
    return(
        <div className={`column box ${props.Class}`} style={intro_styles}>
            {props.children}
        </div>
    )   
}

export default ContentBox