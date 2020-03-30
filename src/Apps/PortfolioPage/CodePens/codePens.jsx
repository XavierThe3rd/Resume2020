import React from 'react'
import './styles.css'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import Option from '../../Components/options/option-container'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import ReactFitText from 'react-fittext'

const CodePens = props => {
  const { data, clazz, setClass } = props
  let wind = window.innerWidth
  return (
    <ContentBox className={`${props.className}`}>
      <ReactFitText compressor={wind > 1030 ? 2 : 1}>
        <text.Title>CodePens</text.Title>
      </ReactFitText>

      {data.map(hit => {
        return (
          <Option
            Key={hit.index}
            Title={hit.title}
            clazz={clazz}
            setClass={setClass}
            Search={hit.search}
          ></Option>
        )
      })}
    </ContentBox>
  )
}

export default CodePens
