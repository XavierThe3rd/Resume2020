import React from 'react'
import './styles.scss'

const Text = () => {
  const Title = props => {
    return (
      <h1
        className={`h1 ${props.Class}`}
        style={{
          color: props.Color
        }}
      >
        {props.children}
      </h1>
    )
  }

  const Header = props => {
    return (
      <h2
        className="h2"
        style={{
          color: props.Color
        }}
      >
        {props.children}
      </h2>
    )
  }

  const SubHeader = props => {
    return (
      <h3
        className="h3"
        style={{
          color: props.Color
        }}
      >
        {props.children}
      </h3>
    )
  }

  const Para = props => {
    return <p className="p">{props.children}</p>
  }

  const Link = props => {
    let list_styles = {
      listStyle: 'none',
      cursor: 'pointer'
    }
    return (
      <li
        style={list_styles}
        id={props.Id}
        className={`li ${props.Class}`}
        key={props.Key}
      >
        <a href={props.Ref} value={props.Value} onClick={props.click}>
          {props.children}
        </a>
      </li>
    )
  }

  return {
    Title: Title,
    Header: Header,
    SubHeader: SubHeader,
    Para: Para,
    Link: Link
  }
}

const text = new Text()

export default text
