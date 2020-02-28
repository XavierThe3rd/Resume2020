export const onResize = (props, wid) => {
  ;['resize', 'load'].forEach(event =>
    window.addEventListener(event, () => {
      window.innerWidth >= wid ? props.setMobile(false) : props.setMobile(true)
    })
  )
  window.addEventListener('load', () => {
    window.location.pathname === '/Resume/Home'
      ? props.setHome(true)
      : props.setHome(false)
  })
}
