import Info from './info/info.jsx'
import Pictures from './pictures/pictures.jsx'
import React from 'react'
import './styles.css'
import OverflowScrolling from 'react-overflow-scrolling'

let block = 'specifications'

const ProjectSpecs = props => {
  let { Name, data, pic, setPic } = props
  return (
    <section ref={props.Ref} className={`${block} ${props.className}`}>
      <span className={`${block}_slider`} />
      <span className={`${block}_slider`} />

      <div className={`${block}_holder`}>
        <Info data={data} />
        <Pictures data={data} pic={pic} setPic={setPic} />
      </div>
    </section>
  )
}

export default ProjectSpecs
