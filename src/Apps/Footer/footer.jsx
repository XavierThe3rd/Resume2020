import React, { useState } from 'react'
import text from '../Components/Generics/text-elms/text-elms.jsx'
import Input from '../Components/Generics/input/input-container'
import TextArea from '../Components/Generics/textarea/textarea-container'
import SVG from 'react-inlinesvg'
import ReactFitText from 'react-fittext'
//import { createBrowserHistory } from 'history'
import './styles.css'
import Form from './Form/form-container'

const block = 'footer'
//const appHistory = createBrowserHistory()

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
          <div>
            <text.Header>{data.contactD}</text.Header>
            {data.links.map(hit => (
              <text.Link>
                {hit.title} <SVG src={hit.icon} />
              </text.Link>
            ))}
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
