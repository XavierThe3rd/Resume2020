import React from 'react'
import styles from './styles.scss'
import ContentBox from '../Components/ContentBox/contentBox.jsx'
import Footer from '../Footer/footer.jsx'
import Printables from '../IndexPage/Printables/printables.jsx'
import comps from '../Components/U-Components/u-components.jsx'
import Slider from './Slider/slider-container'

const Portfolio = () => {
  return (
    <section className="port_page">
      <Slider />
      <ContentBox
        Class="port_holders"
        Background={styles.gradientColor}
        Height={50}
      ></ContentBox>
      <Printables Class="port_holders index_borders" />
    </section>
  )
}

export default Portfolio
