export const mobileScroll = (props, pagey) => {
  if (props.tohome == true) props.setOpac(1 - props.dist / 200)
  if (window.pageYOffset > pagey) {
    props.setStep(false)
    if (props.dist >= props.last) props.setScroll(true)
    else if (props.dist < props.next) props.setScroll(false)

    setTimeout(() => {
      props.setLast(props.dist)
    }, 100)
    setTimeout(() => {
      props.setNext(props.dist - 50)
    }, 100)
  } else {
    props.setStep(true)
  }
}

export const deskScroll = (props, opacit) => {
  props.setOpac(1 - props.dist / opacit)
  window.pageYOffset > 800 ? props.setStep(false) : props.setStep(true)
  window.pageYOffset > 500 ? props.setMove(true) : props.setMove(false)
  //if (window.pageYOffset < 700)
  //opacRef.current.style.transform = 'translateY(' + st / -8 + 'px)'
}
