import React from 'react'
import styles from './styles.scss'
import {headerData} from './headerData.js'
import NavButton from '../Components/NavButton/navButton.jsx'
import { Link } from 'react-router-dom'

let get = new headerData()

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setScroll: false, 
            setMobile: false, 
            setMove: false, 
            setClass: false, 
            setNav: false,
            setRight: false,
            setIndex: true,
            setAbout: false,
            setPort: false,
            setCode: false,
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
    }

    loadTime(e) {
        let ct = e.currentTarget
        let toLinks = (cls, i, a, p, c) => {
            if(ct.classList.contains(cls)) {
                this.setState({setIndex: i, setAbout: a, setPort: p, setCode: c})
            }
        }
        setTimeout( () => {
            toLinks("home", true, false, false, false)
            toLinks("about", false, true, false, false)
            toLinks("port", false, false, true, false)
            toLinks("code", false, false, false, true)
        }, 500, ct)
        return ct
    }

    render(){   
        
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
                        Click={this.openNav}
                    />
                </nav>
                {this.state.setNav ? <ul className= {`fix column`} id="navLinks" style={{
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


/*let ls = document.getElementsByClassName('atag')
for(let i = 0; i < ls.length; i++){
    ls[i].classList.remove("active")
}
setTimeout(ct => ct.classList.add("active"), 100, ct)
return ct*/

