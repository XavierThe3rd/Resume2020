import React from 'react'
import ContentBox from '../Components/Generics/content-box/contentBox.jsx'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import styles from './styles.css'

const block = 'about'

const About = ({ about }) => {
  return (
    <section>
      <ContentBox
        className={`${block}`}
        style={{ background: styles.boxColor }}
      >
        <div className={`${block}_wrapper`}>
          <img className={`${block}_image`} src={about.mugshot} />
          <div className={`${block}_text`}>
            <text.Title style={{ color: styles.pColor }}>
              {about.titleHistory}
            </text.Title>
            <br />
            {about.history.map(hit => (
              <span>
                <text.Para style={{ color: styles.pColor }}>
                  {hit.para}
                </text.Para>
                <br /> <br />
              </span>
            ))}
          </div>
        </div>
      </ContentBox>
      <ContentBox
        className={`${block}`}
        style={{ background: styles.boxColor }}
      >
        <div className={`${block}_wrapper`} id={`Intern`}>
          <img className={`${block}_image`} src={about.internlogo} />
          <div className={`${block}_text`}>
            <text.Title style={{ color: styles.pColor }}>
              {about.titleIntern}
            </text.Title>
            <br />
            {about.internship.map(hit => (
              <span>
                <text.Para style={{ color: styles.pColor }}>
                  {hit.para}
                </text.Para>
                <br /> <br />
              </span>
            ))}
          </div>
        </div>
      </ContentBox>
    </section>
  )
}

export default About
