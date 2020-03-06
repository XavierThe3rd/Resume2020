import React from 'react'
import FeaturedWork from './FeaturedWork/featured-container'
import Specializations from './Specializations/Specializations.jsx'
import ContentBox from '../Components/Generics/content-box/contentBox.jsx'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import Printables from './Printables/printables-container'
import Qintel from '../../../images/QintelLogo.png'
import styles from './indexStyles.scss'
import Button from '../Components/Generics/button/button.jsx'
import './indexStyles.scss'

//import DragonG from '../../../images/TheGdragon.svg'

const Index = () => {
  return (
    <section>
      <ContentBox Class="holders box">
        {/*<SVG className="intro_graphic" src={DragonG}/>*/}
        {<text.Title>{'Providing Solutions'}</text.Title>}
        <text.Para>
          Based in the city of pittsburgh, for the past 2 years I have been
          aquiring my degree in Graphic Design while also accumulating a vast
          knowledge of front-end & backend programming skills on my own accord.
          Now finished I look forward to finally providing my skills to you and
          your company.
        </text.Para>
        <Button Click={() => console.log('button was clicked')}>
          Learn More!
        </Button>
      </ContentBox>
      <Specializations Class="holders" />
      <FeaturedWork Class="holders" />
      <ContentBox Class="holders box">
        <text.Title>Interned At...</text.Title>
        <img src={Qintel} alt="none" />
        <text.Para>
          Qintel provided excellent experience in the field of graphic desing
          aquiring skills of a wide variety from report design to programming to
          other off hand skills such as analytical work.'
        </text.Para>
        <Button Click={() => console.log('button was clicked')}>
          Learn More!
        </Button>
      </ContentBox>
      <Printables Class="holders" />
    </section>
  )
}
export default Index
