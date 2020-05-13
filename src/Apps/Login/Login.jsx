import React from 'react'
import './styles.css'
import Button from '../Components/Generics/button/button-container'
import Input from '../Components/Generics/input/input-container'

const block = 'login'

const Login = props => {
  let { setKeys, keys } = props
  let toContent = () => {
    fetch('/Resume/Home', {
      method: 'POST',
      headers: {
        content_type: 'application/json'
      },
      body: JSON.stringify([keys])
    }).then(response => {
      return response.json()
    })
    setTimeout(() => window.location.reload(), 3000)
  }
  return (
    <section className={`${block}`}>
      <div className={`${block}_holder`}>
        <h1>Enter Key Provided by Resume</h1>
        <form
          method={`post`}
          action={`/Resume/Home`}
          onSubmit={e => e.preventDefault()}
        >
          <Input name={`key`} onChange={e => setKeys(e.currentTarget.value)}>
            Key :
          </Input>
          <Button to={`/Resume/Home`} Click={toContent}>
            Enter!
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login
