import React, { useEffect } from 'react'
import styles from './styles.scss'
import ContentBox from '../Components/Generics/content-box/contentBox.jsx'
import Footer from '../Footer/footer.jsx'
import Printables from '../IndexPage/Printables/printables.jsx'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import Button from '../Components/Generics/button/button.jsx'
import Slider from './Slider/slider-container'
import CodePens from './CodePens/codepens-container'

const Portfolio = () => {
  return (
    <section>
      <Slider Class="port_holders" />
      <ContentBox Class="holders h-a">
        <text.Title>GitHub</text.Title>
        <text.Para>Wish to see my github repositories?</text.Para>
        <Button>Click Here!</Button>
      </ContentBox>
      <CodePens Class="holders" />
    </section>
  )
}

export default Portfolio
