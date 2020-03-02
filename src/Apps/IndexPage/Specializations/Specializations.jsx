import React from 'react'
import style from './styles.scss'
import SpecCards from '../../Components/spec-cards/SpecCards.jsx'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import get from './data.js'

const Specializations = props => {
  return (
    <div className={`special_holder column ${props.Class}`}>
      <text.Title Color={style.conColor}>{'Providing Skills In'}</text.Title>
      <div className="wrp-c">
        {get.specData.map(hit => {
          return (
            <SpecCards
              SpecClass={`spec_card_set`}
              HoldClass={'holder_card_set'}
              Index={hit.index}
              Title={hit.title}
              Image={hit.image}
              Para={hit.para}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Specializations
