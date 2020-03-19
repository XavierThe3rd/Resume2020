import React from 'react'
import style from './styles.css'
import SpecCards from '../../Components/spec-cards/specard-holder'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import get from './data.js'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import ReactFitText from 'react-fittext'

let block = 'specialization'

const Specializations = props => {
  return (
    <ContentBox className={`${block} ${props.className}`}>
      <ReactFitText compressor={1.76}>
        <text.Title>Providing Skills In</text.Title>
      </ReactFitText>
      <div className={`${block}_wrapper`}>
        {get.specData.map(hit => {
          return <SpecCards Index={hit.index} Title={hit.title} Image={hit.image} Para={hit.para} />
        })}
      </div>
    </ContentBox>
  )
}

export default Specializations
