import React, { useState, useEffect, useRef, useCallback } from 'react'
import SVG from 'react-inlinesvg'
import FeaturedWork from './FeaturedWork/featured-container'
import Specializations from './Specializations/spec-container'
import ContentBox from '../Components/Generics/content-box/contentBox.jsx'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import Printables from './Printables/printables-container'
import Qintel from '../../../images/QintelLogo.png'
import Button from '../Components/Generics/button/button-container'
import styles from './styles.css'
import Versitile from '../../../images/Versitile.svg'
import ReactFitText from 'react-fittext'
import { toPage } from '../../util/globalFunctions'
import {
  handleScroll,
  handleLoad,
  handleResize
} from '../../util/globalUtilities'

let block = 'ind'

const Index = props => {
  let {
    setNav,
    setClass,
    setLoad,
    setLClass,
    setHome,
    setStep,
    smoothScroll,
    setCursor,
    setOpac,
    setHtag,
    index
  } = props
  let ResizeA = () => (window.innerWidth > 1030 ? 2 : 1.12)
  let ResizeB = () => (window.innerWidth > 1030 ? 1.24 : 1.215)
  let [sizeA, setSizeA] = useState(ResizeA)
  let [sizeB, setSizeB] = useState(ResizeB)

  return (
    <section className={`${block}`}>
      <ContentBox
        Size={() => setSizeA(ResizeA)}
        className={`${block}_holder`}
        style={{ background: styles.boxColor }}
      >
        <SVG className={`${block}_image`} src={Versitile} />
        <ReactFitText compressor={sizeA}>
          <text.Title style={{ color: styles.pColor }}>
            {index.introTitle}
          </text.Title>
        </ReactFitText>
        <text.Para style={{ color: styles.pColor }}>
          {index.introPara}
        </text.Para>
        <Button
          to={'/Resume/About'}
          style={{ color: styles.pColor, borderColor: styles.pColor }}
          Click={() => toPage(props, 'ABOUT', '/Resume/About', 0)}
        >
          Learn More!
        </Button>
      </ContentBox>

      <Specializations className={`${block}_holder`} />
      <FeaturedWork className={`${block}_holder`} />
      <ContentBox
        Size={() => setSizeB(ResizeB)}
        className={`${block}_holder`}
        style={{ background: styles.boxColor }}
      >
        <ReactFitText compressor={sizeB}>
          <text.Title style={{ color: styles.pColor }}>
            {index.internTitle}
          </text.Title>
        </ReactFitText>
        <img Class={`${block}_image`} src={Qintel} alt="none" />
        <text.Para style={{ color: styles.pColor }}>
          {index.internPara}
        </text.Para>
        <Button
          to={'/Resume/About'}
          style={{ color: styles.pColor, borderColor: styles.pColor }}
          Click={() => toPage(props, 'ABOUT', '/Resume/About', 3000)}
        >
          Learn More!
        </Button>
      </ContentBox>
      <Printables className={`${block}_holder`} />
    </section>
  )
}
export default Index
