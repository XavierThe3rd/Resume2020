import React, { useEffect } from 'react'
import styles from './styles.scss'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import Embeder from '../../Components/Generics/embeder/embeder.jsx'
import Option from '../../Components/options/options.jsx'
import text from '../../Components/Generics/text-elms/text-elms.jsx'

const CodePens = props => {
  const { data, clazz, setClass } = props
  return (
    <ContentBox Class={`${props.Class}`}>
      <text.Title>CodePens</text.Title>
      {data.map(hit => {
        return (
          <Option
            Key={hit.index}
            Title={hit.title}
            clazz={clazz}
            setClass={setClass}
          >
            <Embeder
              Class={`code_pens ${clazz ? `code-on` : `code-off`}`}
              Search={hit.search}
              Stream={`chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/acc42426-e295-44bc-aac1-101442fb80bd`}
            />
          </Option>
        )
      })}
    </ContentBox>
  )
}

export default CodePens
