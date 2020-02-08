import React from 'react'
import styles from './styles.scss'
import {headerData} from './headerData.js'
import NavButton from '../Components/NavButton/navButton.jsx'
import barA from '../../../images/BarA.svg'
import barB from '../../../images/BarB.svg'
import barC from '../../../images/BarC.svg'
import barD from '../../../images/BarD.svg'
import barE from '../../../images/BarE.svg'
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';

let get = new headerData()

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setScroll: false, 
            setMobile: false, 
            setMove: false, 
            setClass: false, 
            setLclass: false,
            setNav: false,
            setRight: false,
            setIndex: true,
            setAbout: false,
            setPort: false,
            setCode: false,
            setUl: false,
            setLoad: false,
            barData: [
                {bar: barA},
                {bar: barB},
                {bar: barC},
                {bar: barD},
                {bar: barE}
            ]
        };
        this.openNav=this.openNav.bind(this)
        this.loadTime=this.loadTime.bind(this)
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

    openNav() {
        let nav = document.getElementById("navId")
        let htag = nav.querySelector("h1")
        if(this.state.setNav===false){
            nav.style.zIndex = 5
            if(window.innerWidth > 600) htag.style.opacity= 1
            this.setState({setNav: true}) 
            setTimeout(()=> this.setState({setClass: true}),50)
        } else if (this.state.setNav===true) {
            this.setState({setClass: false})
            //window.innerWidth > 600 ? htag.style.opacity= 0 : htag.style.opacity= 1
            setTimeout(()=>{
            this.setState({setNav: false})
            if(window.innerWidth > 600) nav.style.zIndex = 0 
            }, 500)
        }
    }

    loadTime(e) {
        let ct = e.currentTarget
        let nav = document.getElementById("navId")
        let htag = document.getElementById('hTag')
        let toLinks = (cls, name, i, a, p, c) => {
            if(ct.classList.contains(cls)) {
                nav.style.opacity = 0
                setTimeout(()=> {
                    if(window.innerWidth > 600)nav.style.zIndex = 0
                }, 450)
                setTimeout(() => {
                    nav.style.opacity = 1
                    htag.innerHTML = name
                    this.setState({setIndex: i, setAbout: a, setPort: p, setCode: c})
                    window.scrollTo(0, 0);
                }, 500, ct)
            }
            if(ct.classList.contains("contact")) window.scrollTo(0, document.body.scrollHeight);
        } 
        this.setState({setUl: true})
        this.setState({setLoad: true})
        setTimeout(() => this.setState({setLclass: true}), 100)
        setTimeout(()=> this.setState({setLclass: false}), 750)
        setTimeout(()=> this.setState({setClass: false}), 1250)
        
            toLinks("home", "HOME", true, false, false, false)
            toLinks("about", "ABOUT", false, true, false, false)
            toLinks("port", "PORTFOLIO", false, false, true, false)
            toLinks("code","CODE", false, false, false, true)
        
        setTimeout(() => this.setState({setUl: false, setLoad: false, setNav: false}),2000)
        return ct
    }

    render(){   
        return(
            <header className={`column ${this.state.setClass? `nav-on` : `nav-off`}`}>
                {this.state.setLoad ? this.state.barData.map(hit => {
                return <SVG src={hit.bar} className={`load fix ${this.state.setLclass ? `load-on` : `load-out`}`} style={{
                    left:0, 
                    right:0, 
                    top:0, 
                    bottom:0,
                    width: 300,
                    zIndex: 6,
                    margin: 'auto'
                }}/>
                }): null
                }
                <nav id={`navId`}className={`flx-b-c fix
                    ${this.state.setScroll ? `nav-up`: `nav-down`}`}
                    style={{
                        right:0,
                        width: '100%'
                    }}
                >
                    {this.state.setMobile ? 
                        <span className="screen abs max-w" id="screenId" style={{
                        height: 144,
                        top: -72,
                        right: 0,
                        opacity: 0,
                    }}/> : null}
                    <h1 id="hTag" style={{zIndex: 2}}>Home</h1>
                    <NavButton
                        Class={`nav ${this.state.setMove ? 'button-on' : 'button-off'}`}
                        Id="navButtonId"
                        Click={this.openNav}
                    />
                </nav>
                {this.state.setNav ? <ul className= {`fix column ${this.state.setUl ? `list-out`: 'list-in'}`} id="navLinks" style={{
                        width:'100%',
                        top: 0,
                        left: 0,
                    }}>
                        {this.state.setIndex ? get.indexPage.map(hit=> {
                            return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={this.loadTime}>{hit.tag}</Link></li>
                        }): this.state.setAbout ? get.aboutPage.map(hit=> {
                            return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={this.loadTime}>{hit.tag}</Link></li>
                        }): this.state.setPort ? get.portPage.map(hit=> {
                            return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={this.loadTime}>{hit.tag}</Link></li>
                        }): this.state.setCode ? get.codePage.map(hit=> {
                            return <li key={hit.index}><Link to={hit.ref} className={hit.cls} onClick={this.loadTime}>{hit.tag}</Link></li>
                        }): null
                    }
                    </ul>
                    :null}
            </header>
        )
    }
}




