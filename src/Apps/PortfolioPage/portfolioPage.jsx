import styles from './styles.css'
import React, { useState } from 'react'
import ContentBox from '../Components/Generics/content-box/contentBox.jsx'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import Button from '../Components/Generics/button/button-container'
import Slider from './Slider/slider-container'
import ReactFitText from 'react-fittext'

const block = 'portfolio'
const Portfolio = () => {
  let Resize = () => (window.innerWidth > 1030 ? 2 : 1.4)
  let [size, setSize] = useState(Resize)

  return (
    <section className={block}>
      <Slider Class={`${block}_holder`} />
      <ContentBox
        Size={() => setSize(Resize)}
        className={`${block}_github`}
        style={{ background: styles.boxColor }}
      >
        <ReactFitText compressor={size}>
          <text.Title style={{ color: styles.pColor }}>GitHub</text.Title>
        </ReactFitText>
        <text.Para style={{ color: styles.pColor }}>
          Wish to see my github repositories?
        </text.Para>
        <Button
          stroke={styles.primeBackground}
          color={styles.pureWhite}
          Click={() =>
            window.open('https://github.com/XavierThe3rd?tab=repositories')
          }
        >
          Click Here!
        </Button>
      </ContentBox>
    </section>
  )
}

export default Portfolio
