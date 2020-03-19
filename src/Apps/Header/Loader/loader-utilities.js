export const switchLoad = props => {
  props.setLoad(true)
  setTimeout(() => props.setLClass(true), 100)
  setTimeout(() => {
    props.setHtag(hit.tag)
    window.scrollTo(0, 0)
  }, 500)
  setTimeout(() => props.setLClass(false), 750)
  setTimeout(() => props.setClass(false), 1250)
  setTimeout(() => {
    props.smoothScroll()
    props.setScroll(false)
    hit.tag === 'HOME' ? props.setHome(true) : props.setHome(false)
  }, 1500)
  setTimeout(() => {
    props.setLoad(false)
    props.setNav(false)
  }, 2000)
}
