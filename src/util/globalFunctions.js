import { createBrowserHistory } from 'history'

let history = createBrowserHistory()

export const toPage = (props, name, path, pos) => {
  props.setNav(true)
  props.setCursor(false)
  setTimeout(() => props.setClass(true) | props.setLoad(true), 50)
  setTimeout(() => props.setLClass(true), 250)
  setTimeout(() => {
    history.push(path)
    props.setHtag(name)
    window.scrollTo(0, pos)
  }, 750)
  setTimeout(() => {
    props.smoothScroll()
    props.setStep(true)
    props.setOpac(1)
    props.setLClass(false)
    props.setHome(false)
  }, 850)
  setTimeout(() => props.setClass(false), 1350)
  setTimeout(() => props.setLoad(false) | props.setNav(false), 2000)
}
