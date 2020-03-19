import React from 'react'
import SVG from 'react-inlinesvg'
import FeaturedWork from './FeaturedWork/featured-container'
import Specializations from './Specializations/Specializations.jsx'
import ContentBox from '../Components/Generics/content-box/contentBox.jsx'
import text from '../Components/Generics/text-elms/text-elms.jsx'
//import Printables from './Printables/printables-container'
import Qintel from '../../../images/QintelLogo.png'
import Button from '../Components/Generics/button/button.jsx'
import styles from './styles.css'
import Versitile from '../../../images/Versitile.svg'
import ReactFitText from 'react-fittext'

let block = 'index'

const Index = () => {
  return (
    <section className={`${block}`}>
      <ContentBox className={`${block}_holder`} style={{ background: styles.gradientColor }}>
        <SVG className={`${block}_image`} src={Versitile} />
        <ReactFitText compressor={2}>
          <text.Title>Providing Versatility</text.Title>
        </ReactFitText>
        <text.Para>
          Based in the city of pittsburgh, for the past 2 years I have been aquiring my degree in
          Graphic Design while also accumulating a vast knowledge of front-end & backend programming
          skills on my own accord. Now finished I look forward to finally providing my skills to you
          and your company.
        </text.Para>
        <Button Click={() => console.log('button was clicked')}>Learn More!</Button>
      </ContentBox>
      <Specializations className={`${block}_holder`} />
      <FeaturedWork className={`${block}_holder`} />
      <ContentBox className={`${block}_holder`} style={{ background: styles.gradientColor }}>
        <ReactFitText compressor={1.24}>
          <text.Title>Interned At...</text.Title>
        </ReactFitText>
        <img Class={`${block}_image`} src={Qintel} alt="none" />
        <text.Para>
          Qintel provided excellent experience in the field of graphic desing aquiring skills of a
          wide variety from report design to programming to other off hand skills such as analytical
          work.'
        </text.Para>
        <Button Click={() => console.log('button was clicked')}>Learn More!</Button>
      </ContentBox>
      {/*<Printables Class="holders" />*/}
    </section>
  )
}
export default Index
