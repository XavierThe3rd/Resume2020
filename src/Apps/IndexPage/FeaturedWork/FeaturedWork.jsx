import React from 'react'
import ProjectPiece from '../../Components/portfolio/port-piece-holder'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import Button from '../../Components/Generics/button/button.jsx'
import './styles.css'
import ContentBox from '../../Components/Generics/content-box/contentBox.jsx'
import ReactFitText from 'react-fittext'

let block = 'featured'

const FeaturedWork = props => {
  let { data, setData, pic, setPic, setOutL, setOutR, setInL, setInR } = props
  return (
    <ContentBox className={`${block} ${props.className}`}>
      <ReactFitText compressor={1.57}>
        <text.Title>Featured Works</text.Title>
      </ReactFitText>
      <div className={`${block}_holder`}>
        {data.map(hit => {
          if (hit.index < 5) {
            return (
              <ProjectPiece
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
      <Button Click={() => console.log('button was clicked')}>Learn More!</Button>
    </ContentBox>
  )
}

export default FeaturedWork
