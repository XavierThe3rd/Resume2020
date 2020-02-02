import './styles.scss';
import React from "react";

const ContentBox = (props) => {

    let intro_styles = {
        alignItems: props.Align,
        background: props.Background,
    }
    

    return(
        <div className={`intro column`} style={intro_styles}>
            {props.children}
        </div>
    )
    
}

export default ContentBox