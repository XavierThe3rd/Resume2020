import React, { useState } from 'react'
import Option from '../../Components/options/option-container'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import Embeder from '../../Components/Generics/embeder/embeder.jsx'
import './styles.css'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import ReactFitText from 'react-fittext'

const block = 'prints'

const Printables = props => {
  const { setOption, option, data } = props
  let Resize = () => (window.innerWidth > 1030 ? 1.88 : 1.15)
  let [size, setSize] = useState(Resize)

  return (
    <ContentBox
      Size={() => setSize(Resize)}
      id={props.id}
      className={`${block} ${props.className}`}
    >
      <ReactFitText compressor={size}>
        <text.Title>Printed Documents</text.Title>
      </ReactFitText>
      {data.map(hit => {
        return (
          <Option
            Key={hit.index}
            Title={hit.title}
            setOption={setOption}
            option={option}
            Search={hit.search}
          />
        )
      })}
    </ContentBox>
  )
}

export default Printables
