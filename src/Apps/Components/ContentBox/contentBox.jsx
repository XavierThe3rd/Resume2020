import './styles.scss';

import React, {useState} from "react";

const ContentBox = (props) => {

    let intro_styles = {
        borderRadius: 5,
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