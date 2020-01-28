import React, { useState } from "react";
import ProjectCard from './portfolioCards.jsx';
import PieceInfo from './portfolioInfo.jsx'



const ProjectPiece = ({Image, Class, Index, Title, Project, Type, Color, Desc, Name})=>{
    const [infoState, setInfo] = useState(false)
    const [displayState, setDisplay] = useState(false)
    return <div key={Index} className={Class}>
            <ProjectCard
              Image={Image}
              Title= {Title}
              Desc={Desc}
              Project={Project}
              Type={Type}
              Color={Color}
              Click={()=> window.innerWidth > 1065 ? setInfo(true) | setTimeout(()=>setDisplay(true), 10) : null}
              Click2={()=> window.innerWidth < 1065 ? setInfo(true) | setTimeout(()=>setDisplay(true), 10) : null}
            />
            {infoState ? <PieceInfo 
            Name={Name}
            Class={`${displayState ? `info_on`: `info_off`}`}
            Click={()=>setDisplay(false) | setTimeout(()=>setInfo(false), 600) }
        />: null}
    </div>
}

export default ProjectPiece