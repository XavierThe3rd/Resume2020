import './styles.scss';

import React, {useState} from "react";

const ContentBox = ({Background, Left, Right, Align, Title, Para, ContentA, ContentB, ContentC, Id})=> {

    let intro_styles = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        alignItems: Align,
        background: Background,
    }
    

    return(
        <div className={`intro`} id={Id} style={intro_styles}>
            {ContentA()}
            <h1>{Title}</h1>
            {ContentB()}
            <p>{Para}</p>
            {ContentC()}
            <span/>
        </div>
    )
    
}

export default ContentBox