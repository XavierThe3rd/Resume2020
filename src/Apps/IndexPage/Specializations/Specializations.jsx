import React from "react";
import  style from './styles.scss'
import SpecCards from '../../Components/SpecCards/SpecCards.jsx'
import comps from '../../Components/U-Components/u-components.jsx'
import get from './data.js'

const Specializations = ()=> {
    
    return <div className="special_holder column">
        <div className="wrp-b">
            {get.specData.map(hit => {
            return <SpecCards 
                Index={hit.index}
                Title={hit.title}
                Image={hit.image}
                Para={hit.para}
                />
            })}
        </div>
    </div>
}

export default Specializations