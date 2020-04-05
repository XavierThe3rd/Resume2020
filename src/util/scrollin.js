export default class SmoothScroll {
  constructor() {
    this.moving = false
    this.target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body

    this.posi = window.pageYOffset
    this.scrolled = this.scrolled.bind(this)
    this.eventType = this.eventType.bind(this)
    this.normalizeWheelDelta = this.normalizeWheelDelta.bind(this)
  }

  normalizeWheelDelta = e => {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / (200 / 4)) * (e.detail > 0 ? 1 : -1)
      else return -e.detail / (200 / 40)
    } else return e.wheelDelta / 200
  }

  scrolled(e) {
    let update = () => {
      this.moving = true
      let delta = (this.posi - this.target.scrollTop) / 12
      this.target.scrollTop += (this.posi - this.target.scrollTop) / 12
      Math.abs(delta) > 1 ? requestFrame(update) : (this.moving = false)
    }
    e.preventDefault()
    let delta = this.normalizeWheelDelta(e)
    this.posi += -delta * 200
    this.posi = Math.max(
      0,
      Math.min(this.posi, this.target.scrollHeight - this.target.clientHeight)
    )
    if (!this.moving) update()
  }

  eventType(event) {
    window.removeEventListener(event, this.scrolled, {
      passive: false
    })
    return window.addEventListener(event, this.scrolled, {
      passive: false
    })
  }

  switchState() {
    this.posi = this.target.scrollTop
    typeof InstallTrigger !== 'undefined'
      ? this.eventType('DOMMouseScroll')
      : this.eventType('wheel')
  }
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
