let ls = 0
let ns = 0

export const navScroll = props => {
  props.setDist(window.pageYOffset)
  props.setOpacNav(1 - props.dist / 200)

  let mobileScroll = pagey => {
    if (window.pageYOffset > pagey) {
      if (props.dist >= ls) props.setScroll(true)
      else if (props.dist < ns) props.setScroll(false)
      setTimeout(() => (ls = props.dist), 100)
      setTimeout(() => (ns = props.dist - 25), 100)
    }
  }

  let deskScroll = pagey => {
    window.pageYOffset > pagey ? props.setMove(true) : props.setMove(false)
  }

  if (!props.navState) {
    if (window.innerWidth < 1030)
      props.tohome == true ? mobileScroll(500) : mobileScroll(72)
    else props.tohome == true ? deskScroll(500) : deskScroll(50)
  }
}
