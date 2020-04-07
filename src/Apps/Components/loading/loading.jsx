import React from 'react'
import './styles.css'

const block = 'loading'

const Loading = props => {
  return (
    <svg
      className={`${block} ${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268.1 268.1"
    >
      <circle
        cx="134"
        cy="134"
        r="133.8"
        className={`${block}_path ${block}_origin`}
      />
      <circle
        cx="134"
        cy="134"
        r="76.9"
        className={`${block}_path ${block}_origin`}
      />
      <circle
        cx="134"
        cy="134"
        r="66.4"
        className={`${block}_path ${block}_origin`}
      />
      <g className={`${block}_ballz ${block}_origin`}>
        <circle cx="144.6" cy="17.9" r="13.6" />
        <circle cx="134" cy="134" r="37.9" />
        <circle cx="188.2" cy="81.7" r="7.7" />
        <circle cx="123.4" cy="250.2" r="13.6" />
        <circle cx="79.9" cy="186.4" r="7.7" />
      </g>
    </svg>
  )
}

export default Loading
