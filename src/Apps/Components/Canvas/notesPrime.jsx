import React from 'react'
import PropTypes from  'prop-types'
import SVG from 'react-inlinesvg';
import resizeDetector from 'element-resize-detector'

export default class Canvas extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        background: PropTypes.string,
        numberOrbs: PropTypes.number,
        maxVelocity: PropTypes.number,
        orbRadius: PropTypes.number,
        minProximity: PropTypes.number,
        initialColorAngle: PropTypes.number,
        colorFrequency: PropTypes.number,
        colorAngleIncrement: PropTypes.number,
        globalAlpha: PropTypes.number,
    }

    static defaultProps = {
        className: '',
        background: '#18191e',
        numberOrbs: 100, //change total Orbs
        maxVelocity: 1.75, //change total Velocity
        orbRadius: 1, //change orb radius
        minProximity: 150, // change closeness
        initialColorAngle: 7, //initial angle of color
        colorFrequency: 0.3, //change frequency at which color changes
        colorAngleIncrement: 0.009, //change increment of angle
        globalAlpha: 0.005 //???
    }

    _detector = resizeDetector({
        strategy: 'scroll'
    })

    _width = 0
    _height = 0
    _bottom = null
    _top = null
    _linecxt = null
    _cxt = null
    _animationFrame = null
    _orbs = null
    _interval = null

    render() {
        let { className } = this.props
        window.addEventListener('scroll', ()=> {
            let can = document.getElementById('canvas')
            let svg = document.getElementById('Logo')
            let st = window.pageYOffset
            can.style.transform = 'translateY('+ st/-10 +'px)'
            svg.style.opacity = 1 - st/400
        })
        
        return (
            <div id="canvas" ref={ref => (this._container = ref)} className={className} style={{
                position: 'fixed',
                width: '100%',
                height: '100em',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
                <SVG src={`../../../images/Logo.svg`} id={`Logo`} style={{
                    position: 'fixed',
                    width: '40%',
                    top: 150,
                    left: 115,
                    right: 0,
                    //margin: '0 auto',
                    zIndex: 2
                }}/>
                <canvas ref={ref => (this._bottom = ref)} style={{
                position: 'fixed',
            }}/>
                <canvas ref={ref => (this._top = ref)} style={{
                position: 'fixed',
            }}/>
            </div>
        )
    }

    componentDidMount() {
        this._linecxt = this._top.getContext('2d')
        this._cxt = this._bottom.getContext('2d')
        this._interval = setInterval(this._resize, 100000) 
        this._detector.listenTo(this._container, this._resize)
        this._resize()
    }

    componentWillUnmount() {
        clearInterval(this._interval)
        this._detector.uninstall(this._container) 
    }

    _resize = () => {  
        let styles = getComputedStyle(this._container)
        this._width = parseFloat(styles.width)
        this._height = parseFloat(styles.height)
        this._setup()
    }

    _setup = () => {
        this._top.width = this._width
        this._top.height = this._height
        this._bottom.width = this._width
        this._bottom.height = this._height

        this._fillBackground(this._cxt)


        this._orbs = new Orbs(
            this.props,
            {
                cxt: this._cxt,
                linecxt: this._linecxt
            },
            {
                width: this._width,
                height: this._height
            }
        )
        if(this._animationFrame !== undefined) {
            cancelAnimationFrame(this._animationFrame)
        }
        this._draw()
    }

    _draw = () => {
        this._fillBackground(this._cxt)
        this._orbs.run()
        this._animationFrame = requestAnimationFrame(this._draw)
    }
    /**
    *@param {object} context
    */
   _fillBackground = context => {
       context.fillStyle = this.props.background
       context.fillRect(0, 0, this._width, this._height)
   }
}

//------------------------------------------------------------------------------

class Orbs {
    constructor(options, contexts, dimensions) {
        this.orbs = []
        this.colorAngle = options.initialColorAngle
        this.colorAngleIncrement = options.colorAngleIncrement
        this.globalAlpha = options.globalAlpha
        this.colorFrequency = options.colorFrequency
        this.minProximity = options.minProximity
        this.color = null
        this.context = contexts.linecxt

        for(var i = 0; i < options.numberOrbs; i++) {
            this.orbs.push(
                new Orb(this.color, options, contexts.cxt, dimensions)
            )
        }
    }

      //---------------------------------------------
    run() {
        this.phaseColor()
        for(var i = 0; i < this.orbs.length; i++) {
            for(var j = i + 1; j < this.orbs.length; j++) {
                this.compare(this.orbs[i], this.orbs[j])
            }
            this.orbs[i].color = this.color
            this.orbs[i].run()
        }
    }

    compare(orbA, orbB) {
        var distance = Math.abs(orbA.position.subtract(orbB.position).length())
        if(distance <= this.minProximity) {
            this.context.beginPath()
            this.context.strokeStyle = this.color
            this.context.globalAlpha = this.globalAlpha
            this.context.moveTo(orbA.position.x, orbA.position.y)
            this.context.lineTo(orbB.position.x, orbB.position.y)
            this.context.stroke()
            this.context.closePath()
        }
    }

    //---------------------------------------------

    phaseColor() {  //changes color output rgb
        var r = Math.floor(
            Math.sin(
                this.colorFrequency * this.colorAngle + (Math.PI * 0) / 3 
            ) * 
            97 + 
            255
        )
        var g = Math.floor(
            Math.sin(
                this.colorFrequency * this.colorAngle + (Math.PI * 2) / 3 
            ) * 
            1 +
            38
        )
        var b = Math.floor(
            Math.sin(
                this.colorFrequency * this.colorAngle + (Math.PI * 4) / 3
            ) * 
            67 + 
            255
            //Math.floor(Math.random() * (337 - 263 + 1) + 263
            //rgba(97, 0, 255, 1)
            //rgba(255, 38, 67, 1)
            //rgba(251, 150, 94, 1)
        )
        this.color = 'rgba('+ r + ', ' + g + ', '+ b +', 1)'//'hsla('+~~(Math.floor(Math.random() * (337 - 263 + 1) + 263))+', 100%, 50%, 1)'
        this.colorAngle += this.colorAngleIncrement
    }
}

//------------------------------------------------------------------------------

class Orb {
    constructor(color, options, context, dimensions) {
        let posX = randBetween(0, dimensions.width)
        let posY = randBetween(0, dimensions.height)
        this.position = new Vector(posX, posY)
        let velS = randBetween(0, options.maxVelocity)
        this.velocity = Vector.randomDirection()
            .multiply(velS)
            .noZ()
        this.radius = options.orbRadius
        this.color = color
        this.dimensions = dimensions
        this.context = context
    }

    update() {
        let {width, height} = this.dimensions
        this.position = this.position.add(this.velocity)
        if ( this.position.x + this.radius >= width || this.position.x - this.radius <= 0) {
            this.velocity.x = this.velocity.x * -1
        }
        if ( this.position.y + this.radius >= height || this.position.y - this.radius <= 0) {
            this.velocity.y = this.velocity.y * -1
        }
    }

    display() {
        this.context.beginPath()
        this.context.fillStyle = this.color
        this.context.ellipse(
            this.position.x, 
            this.position.y,
             this.radius, 
             this.radius, 
             0, 
             0, 
             2 * Math.PI,
            false,
            
        )
        this.context.fill()
        this.context.closePath()
    }

    run() {
        this.update()
        this.display()
    }
}

//------------------------------------------------------------------------------

let randBetween = (low, high)=> { 
    return Math.random() * (low - high) + high 
}
let randIntBetween = (low, high)=> {
    return Math.floor(Math.random() * (high - low + 1) + low)
}
function Vector(x, y, z) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
}

//------------------------------------------------------------------------------

Vector.prototype = {
    negative: function() {
        return new Vector(-this.x, -this.y, - this.z)
    },
    add: function(v) { 
        if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z)
        else return new Vector(this.x + v, this.y + v, this.z + v)
    },
    subtract: function(v) { 
        if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z)
        else return new Vector(this.x - v, this.y - v, this.z - v)
    },
    multiply: function(v) { 
        if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z)
        else return new Vector(this.x * v, this.y * v, this.z * v)
    },
    divide: function(v) { 
        if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z)
        else return new Vector(this.x / v, this.y / v, this.z / v)
    },
    equals: function(v) {
        return this.x == v.x && this.y == v.y && this.z == v.z
    },
    dot: function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z
    },
    cross: function(v) {
        return new Vector( 
            this.y * v.z -this.z * v.y, 
            this.z * v.x -this.x * v.z, 
            this.x * v.y -this.y * v.x
        )
    },
    length: function() {
        return Math.sqrt(this.dot(this))
    },
    unit: function() {
        return this.divide(this.length())
    },
    min: function() {
        return Math.min(Math.min(this.x, this.y), this.z)
    },
    max: function() {
        return Math.max(Math.max(this.x, this.y), this.z)
    },
    toAngles: function() {
        return {
            theta: Math.atan2(this.z, this.x),
            phi: Math.asin(this.y / this.length())
        }
    },
    angleTo: function(a) {
        return Math.acos(this.dot(a) / (this.length() * a.length()))
    },
    toArray: function(n) {
        return [this.x, this.y, this.z].slice(0, n || 3)
    },
    clone: function() {
        return new Vector(this.x, this.y, this.z)
    },
    init: function(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
        return this
    },
    noZ: function() {
        this.z = 0
        return this
    }
}

//------------------------------------------------------------------------------

Vector.negative = function(a, b) {
    b.x = -a.x
    b.y = -a.y
    b.z = -a.z
    return b
}

Vector.add = function(a, b, c) {
    if (b instanceof Vector){
        c.x = a.x + b.x
        c.y = a.y + b.y
        c.z = a.z + b.z
    } else {
        c.x = a.x + b
        c.y = a.y + b
        c.z = a.z + b
    }
    return c
}

Vector.subtract = function(a, b, c) {
    if (b instanceof Vector){
        c.x = a.x - b.x
        c.y = a.y - b.y
        c.z = a.z - b.z
    } else {
        c.x = a.x - b
        c.y = a.y - b
        c.z = a.z - b
    }
    return c
}

Vector.multiply = function(a, b, c) {
    if (b instanceof Vector){
        c.x = a.x * b.x
        c.y = a.y * b.y
        c.z = a.z * b.z
    } else {
        c.x = a.x * b
        c.y = a.y * b
        c.z = a.z * b
    }
    return c
}

Vector.divide = function(a, b, c) {
    if (b instanceof Vector){
        c.x = a.x / b.x
        c.y = a.y / b.y
        c.z = a.z / b.z
    } else {
        c.x = a.x / b
        c.y = a.y / b
        c.z = a.z / b
    }
    return c
}

Vector.cross = function(a, b, c) {
    c.x = a.y * b.z - a.z * b.y
    c.y = a.z * b.x - a.x * b.z
    c.z = a.x * b.y - a.y * b.x
    return c
}

Vector.unit = function(a, b) {
    b.x = a.x / length
    b.y = a.y / length
    b.z = a.z / length
    return b
}

Vector.fromAngles = function(theta, phi) {
    return new Vector(
        Math.cos(theta) * Math.cos(phi),
        Math.sin(phi),
        Math.sin(theta) * Math.cos(phi),
    )
}

Vector.randomDirection = function() {
    return Vector.fromAngles(
        Math.random() * Math.PI * 2,
        Math.asin(Math.random() * 2 - 1)
    )
}

Vector.min = function(a, b) {
    return new Vector(
        Math.min(a.x, b.x),
        Math.min(a.y, b.y),
        Math.min(a.z, b.z),
    )
}

Vector.max = function(a, b) {
    return new Vector(
        Math.max(a.x, b.x),
        Math.max(a.y, b.y),
        Math.max(a.z, b.z),
    )
}

Vector.lerp = function(a, b, fraction) {
    return b
        .subtract(a)
        .multiply(fraction)
        .add(a)
}

Vector.fromArray = function(a) {
    return new Vector(a[0], a[1], a[2])
}

Vector.angleBetween = function(a, b) {
    return a.angleTo(b)
}
