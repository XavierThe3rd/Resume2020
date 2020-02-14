import React, {useState, useEffect, useRef} from 'react'

import SVG from 'react-inlinesvg';
import Dragon from '../../../../images/Dragon.svg'
import BigRock from '../../../../images/BigRock.svg'
import MiddleRock from '../../../../images/MiddleRock.svg'
import SmallRock from '../../../../images/SmallRock.svg'
import GearW from '../../../../images/GearWholeWire.svg'
import GearH from '../../../../images/GearHalfWire.svg'
import GearQ from '../../../../images/GearQuarterWire.svg'
import GearQS from '../../../../images/GearQuarterWireS.svg'
import './styles.scss'


const Canvas = ()=> {
    let [mobileState, setMobile] = useState(false)
    let canRef = useRef(null);

    useEffect(()=>{
        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
          window.innerWidth > 600 ? setMobile(false) : setMobile(true)
        }))

        if(mobileState===true){
            window.addEventListener('scroll', ()=> {
                let st = window.pageYOffset
                let gear = document.getElementsByClassName("gear")
                for(let i=0; i < gear.length; i++){
                    if(i < 4){gear[i].style.transform = 'rotate('+ (st/-2) +'deg)'}
                    if(i < 7 && i > 3)gear[i].style.transform = 'rotate('+ (st/4) +'deg)'
                    if(i < 9 && i > 6)gear[i].style.transform = 'rotate('+ (st/8) +'deg)'
                    if(i === 9)gear[i].style.transform = 'rotate('+ (st/-4) +'deg)'
                    if(i === 10)gear[i].style.transform = 'rotate('+ (st/2) +'deg)'
                }
            })
        }else {
            window.addEventListener('scroll', ()=> {
                let st = window.pageYOffset
                canRef.current.style.transform = 'translateY('+ st/-10 +'px)'
            })
        }
    })
       
    
        /*window.addEventListener('scroll', ()=> {
            let can = document.getElementById('canvas')
            //let clas = document.getElementsByClassName("opac-this")
            let st = window.pageYOffset
            can.style.transform = 'translateY('+ st/-10 +'px)'
            //for(let i=0; i < clas.length; i++) clas[i].style.opacity = 1 - st/400
        })*/
        
        return (
            mobileState ? <div ref={canRef} style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
                <div className="flx-c abs" style={{marginTop: 126, width: '100%'}}>
                    <SVG src={GearQ} className="gear-quarter1 gear abs"/>
                    <SVG src={GearQS} className="gear-quarter1res gear abs"/>
                    <SVG src={GearQ} className="gear-quarter2res gear abs"/>
                    <SVG src={GearQ} className="gear-quarter3res gear abs"/>
                    <SVG src={GearH} className="gear-half1 gear abs"/>
                    <SVG src={GearH} className="gear-half2 gear abs"/>
                    <SVG src={GearH} className="gear-half-v gear abs"/>
                    <SVG src={GearW} className="gearmid-whole gear abs"/>
                    <SVG src={GearW} className="gear-whole-x gear abs"/>
                    <SVG src={GearH} className="gear-half3 gear abs"/>
                    <SVG src={GearQ} className="gear-quarter-w gear abs"/>          
                </div>
            </div>
            :<div id="canvas" ref={canRef} style={{
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
