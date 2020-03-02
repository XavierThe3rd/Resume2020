export const toLinks = (props, e, cls, name, i, a, p, t) => {
  let ct = e.currentTarget
  if (ct.classList.contains(cls)) {
    setTimeout(() => {}, 450)
    setTimeout(
      () => {
        props.setHtag(name)
        window.scrollTo(0, 0)
        ;props.setIndex(i) | props.setAbout(a) | props.setPort(p)
      },
      t,
      ct
    )
  }
  if (ct.classList.contains('contact')) {
    window.scrollTo(0, document.body.scrollHeight)
  }
  return ct
}

export const resetPage = props => {
  props.setStep(true)
  props.smoothScroll()
  props.setOpac(1)
  props.setScroll(false)
  if (window.location.pathname === '/Resume/Home') {
    props.setHome(true)
  } else {
    props.setHome(false)
  }
}

export const resetProps = props => {
  console.log(props.step)
  props.setLoad(false)
  props.setNav(false)
  props.setClass(false)
  props.setZ(0)
}
