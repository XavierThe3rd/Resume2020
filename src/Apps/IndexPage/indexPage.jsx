import React from 'react'
import FeaturedWork from './FeaturedWork/FeaturedWork.jsx'
import Specializations from './Specializations/Specializations.jsx'
import ContentBox from '../Components/ContentBox/contentBox.jsx'
import comps from '../Components/U-Components/u-components.jsx'
import Printables from './Printables/printables.jsx'
import Qintel from '../../../images/QintelLogo.png'
import styles from './indexStyles.scss'
import './indexStyles.scss'
import Footer from '../Footer/footer.jsx'
import SVG from 'react-inlinesvg'
//import DragonG from '../../../images/TheGdragon.svg'

const Index = () => {
  return (
    <section style={{ height: '100%' }}>
      <ContentBox Class="index_holders" Height={'100%'}>
        {/*<SVG className="intro_graphic" src={DragonG}/>*/}
        {
          <comps.Title Color={styles.conColor}>
            {'Providing Solutions'}
          </comps.Title>
        }
        <p>
          {
            'Based in the city of pittsburgh, for the past 2 years I have been aquiring my degree in Graphic Design while also accumulating a vast knowledge of front-end & backend programming skills on my own accord. Now finished I look forward to finally providing my skills to you and your company.'
          }
        </p>
        <comps.Button
          Click={() => console.log('button was clicked')}
          Color={styles.conColor}
        >
          Learn More!
        </comps.Button>
      </ContentBox>
      <Specializations Class="spec-height index_borders" />
      <FeaturedWork Class="index_holders index_borders" />
      <ContentBox
        Class="index_holders"
        Background={
          'linear-gradient(306deg, rgba(97,0,255,1) 0%, rgba(255,38,67,1) 100%)'
        }
      >
        <comps.Title Color={styles.conColor}>Interned At...</comps.Title>
        <img src={Qintel} alt="none" />
        <p>
          {
            'Qintel provided excellent experience in the field of graphic desing aquiring skills of a wide variety from report design to programming to other off hand skills such as analytical work.'
          }
        </p>
        <comps.Button
          Click={() => console.log('button was clicked')}
          Color={styles.conColor}
        >
          Learn More!
        </comps.Button>
      </ContentBox>
      <Printables Class="index_holders index_borders" />
      <Footer />
    </section>
  )
}
export default Index
