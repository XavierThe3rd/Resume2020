export const headScroll = props => {
  let scrollProps = opacit => {
    props.setOpac(1 - props.dist / opacit)
    if (window.pageYOffset > 800) {
      props.setStep(false)
    } else {
      props.setStep(true)
      if (window.innerWidth > 1030)
        document.getElementById('spanId').style.transform =
          'translateY(' + props.dist / -4 + 'px)'
    }
  }
  if (!props.navState) {
    props.tohome == true ? scrollProps(500) : scrollProps(200)
  }
}
