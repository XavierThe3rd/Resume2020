export const getData = props => {
  //appHistory.push('/Resume/Contact')
  if (
    props.name.length === 0 ||
    props.email.length === 0 ||
    props.subject.length === 0 ||
    props.message.length === 0
  ) {
    props.setMore(true)
  } else {
    props.setMore(false)
    props.setThanks(true)
    fetch(props.data.path, {
      method: 'POST',
      headers: {
        content_type: 'application/json'
      },
      body: JSON.stringify([
        props.name,
        props.email,
        props.subject,
        props.message
      ])
    }).then(response => {
      return response.json()
    })
    setTimeout(() => props.setSent(true), 250)
    setTimeout(() => props.setSent(false), 4750)
    setTimeout(() => props.setThanks(false), 6000)
  }
}
