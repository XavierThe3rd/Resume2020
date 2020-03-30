import React from 'react'

const Embeder = props => {
  return (
    <iframe
      className={props.Class}
      src={props.Search}
      style={{ background: '#ffffff' }}
      top-toolbar-height="56"
      javascript="allow"
      full-frame=""
    />
  )
}

export default Embeder
