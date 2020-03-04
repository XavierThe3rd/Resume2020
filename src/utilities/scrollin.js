export default class SmoothScroll {
  constructor(options) {
    Object.assign(this, options)
    this.speed = this.speed
    this.smooth = this.smooth
    this.moving = false
    this.target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body

    this.posi = window.pageYOffset
    this.posi2 = window.pageYOffset

    this.bool = false

    this.scrolled1 = this.scrolled1.bind(this)
    this.scrolled2 = this.scrolled2.bind(this)
    this.normalizeWheelDelta = this.normalizeWheelDelta.bind(this)
  }

  normalizeWheelDelta = e => {
    //console.log(-e.detail + 100 / (this.speed / 50))
    if (e.detail) {
      if (e.wheelDelta)
        return (
          (e.wheelDelta / e.detail / (this.speed / 4)) * (e.detail > 0 ? 1 : -1)
        )
      else return -e.detail / (this.speed / 50)
    } else return e.wheelDelta / this.speed
  }

  scrolled1(e) {
    let update = () => {
      this.posi2 = 0
      this.moving = true
      let delta = (this.posi - this.target.scrollTop) / this.smooth
      this.target.scrollTop += (this.posi - this.target.scrollTop) / this.smooth
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

  scrolled2(e) {
    let update = () => {
      this.moving = true
      this.posi = 0
      let delta = (this.posi2 - this.target.scrollTop) / this.smooth
      this.target.scrollTop +=
        (this.posi2 - this.target.scrollTop) / this.smooth
      Math.abs(delta) > 1 ? requestFrame(update) : (this.moving = false)
    }
    e.preventDefault()
    let delta = this.normalizeWheelDelta(e)
    this.posi2 += -delta * this.speed
    this.posi2 = Math.max(
      0,
      Math.min(this.posi2, this.target.scrollHeight - this.target.clientHeight)
    )
    if (!this.moving) update()
  }

  switchScroll() {
    if (this.bool === false) {
      this.bool = true
      if (typeof InstallTrigger !== 'undefined') {
        window.removeEventListener('DOMMouseScroll', this.scrolled1, {
          passive: false
        })
      } else {
        window.removeEventListener('wheel', this.scrolled1, { passive: false })
      }
      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof InstallTrigger !== 'undefined') {
          window.addEventListener('DOMMouseScroll', this.scrolled2, {
            passive: false
          })
        } else {
          window.addEventListener('wheel', this.scrolled2, {
            passive: false
          })
        }
      }, 500)
    } else {
      this.bool = false
      if (typeof InstallTrigger !== 'undefined') {
        window.removeEventListener('DOMMouseScroll', this.scrolled2, {
          passive: false
        })
      } else {
        window.removeEventListener('wheel', this.scrolled2, { passive: false })
      }
      setTimeout(() => {
        window.scrollTo(0, 0)
        if (typeof InstallTrigger !== 'undefined') {
          window.addEventListener('DOMMouseScroll', this.scrolled1, {
            passive: false
          })
        } else {
          window.addEventListener('wheel', this.scrolled1, { passive: false })
        }
      }, 500)
    }
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
