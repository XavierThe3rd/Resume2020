import React, { useState } from 'react'
import SpecCards from '../../Components/spec-cards/specard-holder'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import ReactFitText from 'react-fittext'
import './styles.css'

const block = 'specialization'

const Specializations = props => {
  let { spec } = props
  let Resize = () => (window.innerWidth > 1030 ? 1.76 : 0.95)
  let [size, setSize] = useState(Resize)
  return (
    <ContentBox
      Size={() => setSize(Resize)}
      id={props.id}
      className={`${block} ${props.className}`}
    >
      <ReactFitText compressor={size}>
        <text.Title>Providing Skills In</text.Title>
      </ReactFitText>
      <div className={`${block}_wrapper`}>
        {spec.map(hit => {
          return (
            <SpecCards
              className={`${block}_card`}
              Index={hit.index}
              Title={hit.title}
              Image={hit.image}
              Para={hit.para}
            />
          )
        })}
      </div>
    </ContentBox>
  )
}

export default Specializations
