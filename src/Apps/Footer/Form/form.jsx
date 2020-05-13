import React from 'react'
import text from '../../Components/Generics/text-elms/text-elms.jsx'
import Input from '../../Components/Generics/input/input-container'
import TextArea from '../../Components/Generics/textarea/textarea-container'
import Button from '../../Components/Generics/button/button-container'
import { getData } from './form-utilities'
import styles from './styles.css'

const block = 'form'

const Form = props => {
  const {
    data,
    name,
    setName,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    more,
    setMore,
    sent,
    setSent,
    thanks,
    setThanks
  } = props

  return (
    <form
      className={`${block}`}
      autoComplete="off"
      method={`post`}
      action={data.path}
      onSubmit={e => e.preventDefault()}
    >
      <text.Header>Contact Form</text.Header>
      {more ? (
        <text.Para style={{ color: styles.primeOrange }}>
          please fill out all sections
        </text.Para>
      ) : null}
      {data.inputs.map(hit => (
        <Input
          name={hit.name}
          onChange={e => {
            if (e.currentTarget.name === 'name') setName(e.currentTarget.value)
            if (e.currentTarget.name === 'email')
              setEmail(e.currentTarget.value)
            if (e.currentTarget.name === 'subject')
              setSubject(e.currentTarget.value)
          }}
        >
          {hit.title}
        </Input>
      ))}
      <div
        className={`${block}_text ${thanks ? `${block}-on` : `${block}-off`}`}
      >
        {sent ? (
          <span className={`${block}_thanks`}>
            <text.Header>
              Message sent, thank you for your consideration.
            </text.Header>
          </span>
        ) : (
          data.textareas.map(hit => (
            <TextArea
              name={hit.name}
              onChange={e => setMessage(e.currentTarget.value)}
            >
              {hit.title}
            </TextArea>
          ))
        )}
      </div>
      <Button
        Class={`${block}_button`}
        Click={() => getData(props)}
        stroke={styles.pureWhite}
        color={styles.primeBackground}
      >
        Submit
      </Button>
    </form>
  )
}

export default Form
