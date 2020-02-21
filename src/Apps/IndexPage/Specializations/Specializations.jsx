import React from "react";
import  style from './styles.scss'
import SpecCards from '../../Components/SpecCards/SpecCards.jsx'
import comps from '../../Components/U-Components/u-components.jsx'
import get from './data.js'

const Specializations = (props)=> {
    
    return <div className={`special_holder column ${props.Class}`}>
        <comps.Title Color={style.conColor}>{'Providing Skills In'}</comps.Title>
        <div className="wrp-c">
            {get.specData.map(hit => {
            return <SpecCards
                SpecClass={`spec_card_set`}
                HoldClass={'holder_card_set'}
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