import React, { useState } from "react";
import styles from './styles/styles.scss';
import SmallHamburger from "../Hamburgers/smallHamburger.jsx";

const ProjectCard = ({Image, Title, Project, Type, Color, Desc, Click, Click2})=>{
    const [hoverState, setHover] = useState(false)
    const [widthState, setWidth] = useState(false)
    const [buttonState, setButton] = useState(false)
    const [classState, setClass] = useState(false)

    let project_card_styles = {
        cursor: 'pointer',
        transition: 'all 0.15s linear',
        //overflow: 'hidden',
    }

    let image_png_styles = {
        overflow: 'hidden',
        zIndex: 0
    }

    let screen_styles = {
        width: '100%',
        padding: '0 20px',
        zIndex: 1,
        transition: 'all 0.35s linear',
        background: 'linear-gradient(0deg, rgba(97,0,255,1) 0%, rgba(251,150,94,0) 100%)'
    }

    let divider_styles = {
        zIndex: 4,
    }

    let title_styles = {
        marginLeft: 20
    }

    let inner_text_styles = {
        background: styles.primePurple,
        padding: '20px 20px 0',
        zIndex: 1,
        transition: 'all 0.35s linear'
    }

    let hover_span_styles = {
        padding: '0px 0 10px'
    }

    let lower_span_styles = {   
        background: styles.primePurple,
        zIndex: 3,
        padding: '0 20px 20px',
    }

    let toInner = (e)=>{
        if (e.currentTarget.classList.contains('b-off')){
            setHover(true)
            setButton(true)
            setTimeout(()=> setClass(true),10)
        }else {
            setClass(false) 
            setTimeout(()=> setHover(false) | setButton(false),350)
        } 
    }
    window.addEventListener('load', ()=> window.innerWidth < 1065 ? setWidth(true) : setWidth(false))
    window.addEventListener('resize', ()=> window.innerWidth < 1065 ? setWidth(true) : setWidth(false))

    return(
      <div className={`project_card column ${classState? `pc-on` : 'pc-off'}`}
        onClick={Click}
        onMouseEnter={window.innerWidth > 1065 ? ()=>setHover(true) | setTimeout(()=> setClass(true),10):null} 
        onMouseLeave={window.innerWidth > 1065 ? ()=>setClass(false) |  setTimeout(()=> setHover(false),350):null} 
        style={project_card_styles}>
        <span className="image_png flx--e abs" style={image_png_styles}>
          <img src={Image} className="abs"/>
          <span className="screen flex abs" style={screen_styles}/>
        </span>
        <div className="divider" style={divider_styles}>
            {widthState ? <SmallHamburger 
                Class={`${buttonState? `b-on`: `b-off`}`}
                Click={toInner}
            />: null}
        </div>
        <h1 style={title_styles}>{Title}</h1>
        <div className="inner_text column" style={inner_text_styles} onClick={Click2}>
        {hoverState ? <span className="column" style={hover_span_styles}>
            <p>{Desc}</p>
            <h3>CLICK TO LEARN MORE</h3>
            </span>: null}
        </div>
        <span className="row-b" style={lower_span_styles}>
            <h2 style={{color: Color}}>{Project}</h2><h2 style={{color: Color}}>{Type}</h2>
        </span>
      </div>
    )
}
export default ProjectCard