export default class SmoothScroll {
  constructor(options) {
    Object.assign(this, options)
    this.moving = false
    this.target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body

    this.posi = window.pageYOffset
    this.posi2 = window.pageYOffset
    this.y

    this.bool = false

    this.scrolled1 = this.scrolled1.bind(this)
    this.scrolled2 = this.scrolled2.bind(this)
    this.normalizeWheelDelta = this.normalizeWheelDelta.bind(this)
  }

  normalizeWheelDelta = e => {
    /*;['mousemove', 'scroll', 'wheel'].forEach(item =>
      window.addEventListener(item, e => {
        let curs = document.getElementById('Cursor')
        let x = e.pageX
        this.y = e.pageY - this.posi
        curs.style.left = x - 15 + 'px'
        curs.style.top = this.y - 15 + 'px'
      })
    )*/
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / (200 / 4)) * (e.detail > 0 ? 1 : -1)
      else return -e.detail / (200 / 40)
    } else return e.wheelDelta / 200
  }

  scrolled1(e) {
    //if (window.location.pathname != '/Resume/Portfolio') {
    let update = () => {
      this.posi2 = 0
      this.moving = true
      let delta = (this.posi - this.target.scrollTop) / 12
      //let gamma = (this.y - this.target.scrollTop) / 12
      this.target.scrollTop += (this.posi - this.target.scrollTop) / 12
      Math.abs(delta) > 1 ? requestFrame(update) : (this.moving = false)
      //Math.abs(gamma) > 1 ? requestFrame(update) : (this.moving = false)
    }
    e.preventDefault()
    let delta = this.normalizeWheelDelta(e)
    this.posi += -delta * 200
    this.posi = Math.max(
      0,
      Math.min(this.posi, this.target.scrollHeight - this.target.clientHeight)
    )
    if (!this.moving) update()
    //}
  }

  scrolled2(e) {
    //if (window.location.pathname != '/Resume/Portfolio') {
    let update = () => {
      this.moving = true
      this.posi = 0
      let delta = (this.posi2 - this.target.scrollTop) / 12
      this.target.scrollTop += (this.posi2 - this.target.scrollTop) / 12
      Math.abs(delta) > 1 ? requestFrame(update) : (this.moving = false)
    }
    e.preventDefault()
    let delta = this.normalizeWheelDelta(e)
    this.posi2 += -delta * 200
    this.posi2 = Math.max(
      0,
      Math.min(this.posi2, this.target.scrollHeight - this.target.clientHeight)
    )
    if (!this.moving) update()
    //}
  }

  switchScroll() {
    if (window.pageYOffset > document.body.scrollHeight - 2000) {
      window.removeEventListener('wheel', this.scrolled1, { passive: false })
      window.removeEventListener('wheel', this.scrolled2, { passive: false })
    } else if (this.bool === false) {
      this.bool = true
      if (typeof InstallTrigger !== 'undefined') {
        window.removeEventListener('DOMMouseScroll', this.scrolled1, {
          passive: false
        })
      } else {
        window.removeEventListener('wheel', this.scrolled1, { passive: false })
      }
      setTimeout(() => {
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
