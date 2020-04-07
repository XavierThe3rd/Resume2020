import React from 'react'
import Info from './info/info.jsx'
import Pictures from './pictures/pictures.jsx'
import './styles.css'

let block = 'specifications'

const ProjectSpecs = props => {
  let { Name, data, pic, setPic, setCursor } = props
  return (
    <section ref={props.Ref} className={`${block} ${props.className}`}>
      <span className={`${block}_slider`} />
      <span className={`${block}_slider`} />

      <div className={`${block}_holder`}>
        <Info data={data} setCursor={setCursor} />
        <Pictures data={data} pic={pic} setPic={setPic} setCursor={setCursor} />
      </div>
    </section>
  )
}

export default ProjectSpecs
