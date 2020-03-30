import React, { useState } from 'react'
import ProjectPiece from '../../Components/portfolio/port-piece-holder'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import Button from '../../Components/Generics/button/button-container'
import './styles.css'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import ReactFitText from 'react-fittext'
import { toPage } from '../../../util/globalFunctions'

const block = 'featured'

const FeaturedWork = props => {
  let {
    data,
    pic,
    setPic,
    setNav,
    setClass,
    setLoad,
    setLClass,
    setHome,
    setStep,
    smoothScroll,
    setOpac,
    setHtag
  } = props
  let Resize = () => (window.innerWidth > 1030 ? 1.57 : 1)
  let [size, setSize] = useState(Resize)
  return (
    <ContentBox
      Size={() => setSize(Resize)}
      id={props.id}
      className={`${block} ${props.className}`}
    >
      <ReactFitText compressor={size}>
        <text.Title>Featured Works</text.Title>
      </ReactFitText>
      <div className={`${block}_holder`}>
        {data.map(hit => {
          if (hit.index < 5) {
            return (
              <ProjectPiece
                className={`${block}_card`}
                data={hit.Inner}
                Index={hit.index}
                Image={hit.image}
                Title={hit.title}
                Desc={hit.desc}
                Project={hit.project}
                Type={hit.type}
                Color={hit.color}
                Name={hit.name}
                pic={pic}
                setPic={setPic}
              />
            )
          }
        })}
      </div>
      <Button
        className={`${block}_button`}
        to={`/Resume/Portfolio`}
        Click={() => toPage(props, 'Portfolio', '/Resume/Portfolio', 0)}
      >
        See More!
      </Button>
    </ContentBox>
  )
}

export default FeaturedWork
