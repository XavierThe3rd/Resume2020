import React from 'react'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import SVG from 'react-inlinesvg'
import ReactFitText from 'react-fittext'
import './styles.css'
import Form from './Form/form-container'

const block = 'footer'

const Footer = props => {
  let { data } = props
  return (
    <footer className={`${block} ${props.className}`}>
      <ReactFitText compressor={window.innerWidth > 1030 ? 1.16 : 1.25}>
        <text.Title>{data.Title}</text.Title>
      </ReactFitText>
      <div className={`${block}_holder`}>
        <Form data={data} />
        <div className={`${block}_direct`}>
          <div className={`${block}_links`}>
            <text.Header>{data.contactD}</text.Header>
            <ul>
              {data.links.map(hit => (
                <text.Link>
                  {hit.title} <SVG src={hit.icon} />
                </text.Link>
              ))}
            </ul>
          </div>
          <div className={`${block}_logo`}>
            <SVG src={data.Logo} />
          </div>
        </div>
      </div>
      <span className={`${block}_notes`}>{data.notes}</span>
    </footer>
  )
}

export default Footer
