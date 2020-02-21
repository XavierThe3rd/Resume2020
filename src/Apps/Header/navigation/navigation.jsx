/* eslint-disable no-unused-expressions */
import React, {useEffect, useRef} from 'react'
import './navstyles.scss'
import NavButton from '../../Components/NavButton/navButton.jsx'
import NavLinks from '../Loader/loader.jsx';


const Navigation = ({setNav, navState, setClass, classState, setMobile, mobileState, ScrollClassA, ScrollClassB}) => {
    //let hRef = useRef(null);
    let navRef =useRef(null)

    useEffect(()=>{
        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
            window.innerWidth >= 1150 ? setMobile(false) : setMobile(true) 
          }))
    })

    let openNav = () => {
        //console.log('plz work')
        if(navState===false){
            navRef.current.style.zIndex = 5
            //if(window.innerWidth >= 1150) hRef.current.style.opacity= 1
            setNav(true) 
            setTimeout(()=> setClass(true),50)
        } else if (navState===true) {
            setClass(false)
            //window.innerWidth > 600 ? htag.style.opacity= 0 : htag.style.opacity= 1
            setTimeout(()=>{
            setNav(false)
            if(window.innerWidth >= 1150) {navRef.current.style.zIndex = 0} 
            }, 500)
        }
    }
    
    return <nav ref={navRef} className={`navi flx-b-c fix
            ${ScrollClassA}
            ${classState ? `nav-on` : `nav-off`}
        `}
        style={{
            right:0,
            width: '100%'
        }}
        >
        {mobileState ? 
            <span className="screen abs max-w" id="screenId" style={{
            height: 144,
            top: -72,
            right: 0,
            opacity: 0,
        }}/> : null}
        <br/>
        <NavButton
            Class={ScrollClassB}
            Id="navButtonId"
            Click={openNav}
        />
            {navState ? <ul className= {`fix column`} style={{
            width:'100%',
            top: 0,
            left: 0,
        }}>
        <NavLinks setNav={setNav} setClass={setClass}/>
        }
        </ul>
        :null}
    </nav>
}



export default Navigation


/*this.state.setUl ? `list-out`: 'list-in'*/
//this.loadTime