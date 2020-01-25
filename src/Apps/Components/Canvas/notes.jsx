import React from 'react'
import PropTypes from  'prop-types'
import resizeDetector from 'element-resize-detector'

export default class Canvas extends React.Component {
    static propTypes = {
        className: this.PropTypes.string,
        background: this.PropTypes.string,
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
        background: '#000000',
        numberOrbs: 80, //change total Orbs
        maxVelocity: 1.75, //change total Velocity
        orbRadius: 1, //change orb radius
        minProximity: 70, // change closeness
        initialColorAngle: 7, //initial angle of color
        colorFrequency: 0.3, //change frequency at which color changes
        colorAngleIncrement: 0.009, //change increment of angle
        globalAlpha: 0.01 //???
    }

    _detector = resizeDetector({
        strategy: 'scroll'
    })

    _width = 0
    _height = 0
    _bottom = null
    _top = null
    _lincxt = null
    _cxt = null
    _animationFrame = null
    _orbs = null
    _interval = null

    render() {
        let { className } = this.props
        
        return (
            <div ref={ref => (this._container = ref)} className={className}>
                <canvas ref={ref => (this._bottom = ref)}/>
                <canvas ref={ref => (this._top = ref)}/>
            </div>
        )
    }

    componentDidMount() {
        this.linecxt = this._top.getContext('2d')
        this.cxt = this._bottom.getContext('2d')
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

        this.fillBackground(this._cxt)
    }
}