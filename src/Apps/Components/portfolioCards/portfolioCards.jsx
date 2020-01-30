import React, { useState } from "react";
import styles from './styles/styles.scss';
import SmallHamburger from "../Hamburgers/smallHamburger.jsx";




const ProjectCard = ({Image, Title, Project, Type, Color, Desc, Click, Click2})=>{
    const [hoverState, setHover] = useState(false)
    localStorage.setItem('hover', hoverState)
    localStorage.setItem('true', setHover)
    
    const [widthState, setWidth] = useState(false)
    const [buttonState, setButton] = useState(false)
    const [classState, setClass] = useState(false)

    var hover = localStorage.getItem('hover');
    var t = localStorage.getItem('true');

    console.log(hover)

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
    //window.addEventListener('load', ()=> window.innerWidth < 1065 ? setWidth(true) : setWidth(false))
    //window.addEventListener('resize', ()=> window.innerWidth < 1065 ? setWidth(true) : setWidth(false))

    return(
      <div className={`project_card column ${classState? `pc-on` : 'pc-off'}`}
        onClick={Click}
        onMouseEnter={()=>t | setTimeout(()=> setClass(true),10)} 
        onMouseLeave={()=>setClass(false) |  setTimeout(()=> t,350)} 
        style={project_card_styles}>
        <span className="image_png flx--e abs" style={image_png_styles}>
          <img className="abs" src={Image} alt='none'/>
          <span className="screen flex abs" style={screen_styles}/>
        </span>
        <div className="divider" style={divider_styles}>
            {widthState ? <SmallHamburger 
                Class={`${buttonState? `b-on`: `b-off`}`}
                Click={toInner}
                bWidth={65}
                bWidth={65}
                sWidth={30}
            />: null}
        </div>
        <h1 style={title_styles}>{Title}</h1>
        <div className="inner_text column" style={inner_text_styles} onClick={Click2}>
        {hover ? <span className="column" style={hover_span_styles}>
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