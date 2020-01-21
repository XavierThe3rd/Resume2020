import './styles.scss';

import React, {useState} from "react";

const ContentBox = ({Background, Left, Right, Align, Title, Para, ContentA, ContentB, ContentC})=> {
    //let [scrollState, setScroll] = useState(false)

    let intro_styles = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        alignItems: Align,
        background: Background,
        left: Left,
        right: Right,
        margin: '100px 0 500px'
    }
    
    window.addEventListener('scroll', ()=>{
        //window.pageYOffset > 600 ? setScroll(true) : setScroll(false)
    })
    return(
        <div className={`intro  abs` /*${scrollState ? `intro-on`: `intro-off`*/} style={intro_styles}>
            {ContentA()}
            <h1>{Title}</h1>
            {ContentB()}
            <p>{Para}</p>
            {ContentC()}
        </div>
    )
    
}

export default ContentBox