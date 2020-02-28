export const SmoothScroll = () => {
  let target =
    document.scrollingElement ||
    document.documentElement ||
    document.body.parentNode ||
    document.body

  let moving = false
  let pos = target.scrollTop

  target.addEventListener('mousewheel', scrolled, { passive: false })
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false })
  window.addEventListener('scroll', e => e.preventDefault(), { passive: false })

  function scrolled(e) {
    e.preventDefault()
    let delta = normalizeWheelDelta(e)
    pos += -delta * 200
    pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight))
    if (!moving) update()
  }

  let normalizeWheelDelta = e => {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1)
      else return -e.detail / 3
    } else return e.wheelDelta / 200
  }

  let update = () => {
    moving = true
    let delta = (pos - target.scrollTop) / 12
    target.scrollTop += (pos - target.scrollTop) / 12
    Math.abs(delta) > 1 ? requestFrame(update) : (moving = false)
  }

  let requestFrame = (() => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(func) {
        window.setTimeout(func, 1000 / 50)
      }
    )
  })()
}
