import React from 'react'
//import PropTypes from  'prop-types'
import SVG from 'react-inlinesvg';
//import resizeDetector from 'element-resize-detector'

export default class Canvas extends React.Component {
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
                height: '80em',
                background: 'linear-gradient(180deg, rgba(44,48,56,1) 0%, rgba(26,27,30,1) 100%)',
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
                <SVG src={`../../../images/MiddleRock.svg`} id={`Logo`} style={{
                    position: 'fixed',
                    width: '20%',
                    top: 150,
                    left: 500,
                    right: 0,
                    opacity: '0.11',
                    //margin: '0 auto',
                    zIndex: 1
                }}/>
                <SVG src={`../../../images/BigRock.svg`} style={{
                    position: 'fixed',
                    width: '35%',
                    opacity: '0.1',
                    top: -50,
                    left: -100,
                    //margin: '0 auto',
                    zIndex: 1
                }}/>
                <SVG src={`../../../images/SmallRock.svg`} style={{
                    position: 'fixed',
                    width: '10%',
                    opacity: '0.12',
                    top: 600,
                    left: 250,
                    //margin: '0 auto',
                    zIndex: 1
                }}/>

<               SVG src={`../../../images/Dragon.svg`} style={{
                    position: 'fixed',
                    width: '80%',
                    opacity: '0.13',
                    top: 300,
                    left: 300,
                    //margin: '0 auto',
                    zIndex: 1
                }}/>

            </div>
        )
    }

}
