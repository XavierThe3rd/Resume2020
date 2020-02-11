import React, {useState, useEffect} from 'react'
//import PropTypes from  'prop-types'
import SVG from 'react-inlinesvg';
import Dragon from '../../../../images/Dragon.svg'
import BigRock from '../../../../images/BigRock.svg'
import MiddleRock from '../../../../images/MiddleRock.svg'
import SmallRock from '../../../../images/SmallRock.svg'
import Logo from '../../../../images/Logo.svg'

import './styles.scss'
//import resizeDetector from 'element-resize-detector'

const Canvas = ()=> {

       
    
        window.addEventListener('scroll', ()=> {
            let can = document.getElementById('canvas')
            //let clas = document.getElementsByClassName("opac-this")
            let st = window.pageYOffset
            can.style.transform = 'translateY('+ st/-10 +'px)'
            //for(let i=0; i < clas.length; i++) clas[i].style.opacity = 1 - st/400
        })
        
        return (
            <div id="canvas" style={{
                position: 'fixed',
                width: '100%',
                height: '100em',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
                <SVG src={MiddleRock} style={{
                    width: '20%',
                    top: 150,
                    left: 500,
                    right: 0,
                    //opacity: '0.11',
                    //margin: '0 auto',
                    zIndex: 1
                }}/>
                <SVG src={BigRock} style={{
                    width: '35%',
                    //opacity: '0.1',
                    top: -50,
                    left: -100,
                    zIndex: 1
                }}/>
                <SVG src={SmallRock} style={{
                    width: '10%',
                    //opacity: '0.12',
                    top: 600,
                    left: 250,
                    zIndex: 1
                }}/>
                <SVG src={Dragon} className="dragon"/>
            </div>
        )
    
}

export default Canvas
