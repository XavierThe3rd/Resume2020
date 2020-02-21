/* eslint-disable no-unused-expressions */
import React, {useEffect, useState, useRef} from 'react'
import './linkstyles.scss'
import {headerData} from '../headerData.js'
import { Link } from 'react-router-dom';
import barA from '../../../../images/BarA.svg'
import barB from '../../../../images/BarB.svg'
import barC from '../../../../images/BarC.svg'
import barD from '../../../../images/BarD.svg'
import barE from '../../../../images/BarE.svg'
import SVG from 'react-inlinesvg';
import { setNav } from '../../../actions/navigation';

let get = new headerData()


const NavLinks = ({setNav, setClass}) => {
    let [indexState, setIndex] = useState(true)
    //let [homeState, setHome] = useState(false)
    let [aboutState, setAbout] = useState(false)
    let [portState, setPort] = useState(false)
    let [loadState, setLoad] = useState(false)
    let [classState, setLClass] = useState(false)
    let bars = [barA, barB, barC, barD, barE] 

    let loadTime = (e) => {
        let ct = e.currentTarget
        //let nav = document.getElementById("navId")
        //let htag = document.getElementById('hTag') 
        let toLinks = (cls, name, i, a, p) => {
            if(ct.classList.contains(cls)) {
                //nav.style.opacity = 0
                setTimeout(()=> {
                    //if(window.innerWidth >= 1150)nav.style.zIndex = 0
                }, 450)
                setTimeout(() => {
                    //nav.style.opacity = 1
                    //htag.innerHTML = name
                    setIndex(i) | setAbout(a) | setPort(p)
                    window.scrollTo(0, 0);
                }, 500, ct)
            }
            if(ct.classList.contains("contact")) window.scrollTo(0, document.body.scrollHeight);
        } 
        //setUl(true)
        setLoad(true)
        setTimeout(() => setLClass(true), 100)
        setTimeout(()=> setLClass(false), 750)
        setTimeout(()=> setClass(false), 1250)
        
            toLinks("home", "HOME", true, false, false)
            toLinks("about", "ABOUT", false, true, false)
            toLinks("port", "PORTFOLIO", false, false, true)
            console.log('communicated')
            //setTimeout(() => window.location.pathname === '/Resume/Home' ? setHome(true) : setHome(false), 1500)
        setTimeout(() => /*setUl(false)*/ setLoad(false) | setNav(false) | setClass(false)/*setNav(false)*/,2000)
        return ct
    }


    return loadState ? 
        bars.map(hit => {
        return <SVG src={hit} className={`load fix ${classState ? `load-on` : `load-out`}`} style={{
            left:0, 
            right:0, 
            top:0, 
            bottom:0,
            width: 300,
            zIndex: 6,
            margin: 'auto'
        }}/>
        })
        
    :indexState ? get.indexPage.map(hit=> {
        return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={loadTime}>{hit.tag}</Link></li>
    }): aboutState ? get.aboutPage.map(hit=> {
        return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={loadTime}>{hit.tag}</Link></li>
    }): portState ? get.portPage.map(hit=> {
        return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={loadTime}>{hit.tag}</Link></li>
    }): null
}

export default NavLinks

