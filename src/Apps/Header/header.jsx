import React, {useState, useEffect } from 'react'
import styles from './styles.scss'
import {HeaderData} from './headerData.js'
import NavButton from '../Components/NavButton/navButton.jsx'
import comps from '../Components/U-Components/u-components.jsx'



export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setScroll: false, 
            setMobile: false, 
            setMove: false, 
            setClass: false, 
            setNav: false,
            setRight: false
        };
    }
   
    componentDidMount(){
        let lastScroll = 0
        let nextScroll = 0 
        onscroll = ()=>{
            let st = window.pageYOffset 
            if(window.innerWidth < 600){
                if(window.pageYOffset > 500){ 
                    document.getElementById("screenId").style.opacity= 1
                    if (st >= lastScroll) this.setState({setScroll: true}) 
                    else if (st < nextScroll) this.setState({setScroll: false}) 
                    lastScroll = st <= 100 ? 100 : st
                    setTimeout(()=>{nextScroll = st <= 100 ? 100 : st - 100}, 100)   
                }else {
                    this.setState({setRight: false, setScroll: false})
                    document.getElementById("screenId").style.opacity= 0 + st/500 
                }
            } else {
                document.getElementById('hTag').style.opacity = 1 - st/300
                window.pageYOffset > 300 ? this.setState({setMove: true})
                : this.setState({setMove: false})
                
            }
        }

        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
            window.innerWidth < 600 ? this.setState({setMobile: true}) : this.setState({setMobile: false})
        }))
    }

    render(){   
        let get = new HeaderData()
        
        return(
            <header className={`column ${this.state.setClass? `nav-on` : `nav-off`}`}>
                <nav id={`navId`}className={`flx-b-c fix
                    ${this.state.setScroll ? `nav-up`: `nav-down`}`}
                    style={{
                        right:0,
                        width: '100%'
                    }}
                >
                    {this.state.setMobile ?<span className="screen abs max-w" id="screenId" style={{
                        height: 72,
                        right: 0,
                        opacity: 0,
                    }}/>: null}
                    <h1 id="hTag" style={{zIndex: 2}}>Home</h1>
                    <NavButton
                        Class={`nav ${this.state.setMove ? 'button-on' : 'button-off'}`}
                        Id="navButtonId"
                        Click={()=> {
                            let nav = document.getElementById("navId")
                            let htag = nav.querySelector("h1")
                            if(this.state.setNav===false){
                                nav.style.zIndex = 5
                                window.innerWidth > 600 ? htag.style.opacity= 0 : htag.style.opacity= 1
                                this.setState({setNav: true}) 
                                setTimeout(()=> this.setState({setClass: true}),50)
                            } else if (this.state.setNav===true) {
                                this.setState({setClass: false})
                                window.innerWidth < 600 ? htag.style.opacity= 1 : htag.style.opacity= 0
                                setTimeout(()=>{
                                this.setState({setNav: false})
                                window.innerWidth > 600 ? nav.style.zIndex = 0 : nav.style.zIndex = 5
                                }, 500)
                            }
                        }}
                    />
                </nav>
                {this.state.setNav ? <ul className= {`fix`} style={{
                        width:'100%',
                        top: 0,
                        left: 0,
                    }}>
                        {get.Links.map(hit=> {
                            return <comps.Link key={hit.index} click={hit.click}>{hit.tag}</comps.Link>
                        })}
                    </ul>
                    :null}
            </header>
        )
    }
}


/*
let get = new HeaderData()

const Header = ()=> {
    let[scrollState, setScroll] = useState(false)
    let[mobileState, setMobile] = useState(false)
    let[moveState, setMove] = useState(false)
    let[classState, setClass] = useState(false)
    let[navState, setNav] = useState(false)

   
    useEffect(() => {
        let lastScroll = 0
        let nextScroll = 0 
        onscroll = ()=>{
            let st = window.pageYOffset 
            if(window.innerWidth < 600){
                if(window.pageYOffset > 500){ 
                    document.getElementById("screenId").style.opacity= 1
                    if (st >= lastScroll) setScroll(true)
                    else if (st < nextScroll) setScroll(false) 
                    lastScroll = st <= 100 ? 100 : st
                    setTimeout(()=>{nextScroll = st <= 100 ? 100 : st - 100}, 100)   
                }else {
                    setScroll(false)
                    document.getElementById("screenId").style.opacity= 0 + st/500 
                }
            } else {
                document.getElementById('hTag').style.opacity = 1 - st/300
                window.pageYOffset > 300 ? setMove(true): setMove(false)
            }
        }
        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
            window.innerWidth < 600 ? setMobile(true) : setMobile(false)
        }))
    })
   
    return(
    <header className={`column ${classState ? `nav-on` : `nav-off`}`}>
        <nav id={`navId`}className={`flx-b-c fix
            ${scrollState ? `nav-up`: `nav-down`}`}
            style={{
                right:0,
                width: '100%'
            }}
        >
            {mobileState ?<span className="screen abs max-w" id="screenId" style={{
                height: 72,
                right: 0,
                opacity: 0,
            }}/>: null}
            <h1 id="hTag" style={{zIndex: 2}}>Home</h1>
            <NavButton
                Class={`nav ${moveState ? 'button-on' : 'button-off'}`}
                Id="navButtonId"
                Click={()=> {
                    let nav = document.getElementById("navId")
                    let htag = nav.querySelector("h1")
                    if(navState===false){
                        nav.style.zIndex = 5
                        window.innerWidth > 600 ? htag.style.opacity= 0 : htag.style.opacity= 1
                        setNav(true)
                        setTimeout(()=> setClass(true),50)
                    } else if (navState===true) {
                        setClass(false)
                        window.innerWidth < 600 ? htag.style.opacity= 1 : htag.style.opacity= 0
                        setTimeout(()=>{
                        setNav(false)
                        window.innerWidth > 600 ? nav.style.zIndex = 0 : nav.style.zIndex = 5
                        }, 500)
                    }
                }}
            />
        </nav>
        {this.state.setNav ? <ul className= {`fix`} style={{
                width:'100%',
                top: 0,
                left: 0,
            }}>
                {get.Links.map(hit=> {
                    return <comps.Link key={hit.index} click={hit.click}>{hit.tag}</comps.Link>
                })}
            </ul>
            :null}
    </header>
    )
}
*/


