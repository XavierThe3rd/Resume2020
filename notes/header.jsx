import React from 'react'
import styles from './styles.scss'
import {headerData} from './headerData.js'
import NavButton from '../Components/NavButton/navButton.jsx'
import barA from '../../../images/BarA.svg'
import barB from '../../../images/BarB.svg'
import barC from '../../../images/BarC.svg'
import barD from '../../../images/BarD.svg'
import barE from '../../../images/BarE.svg'
import Wings from '../../../images/Wings.svg'
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
            setHome : true,
            setLogo : false,
            barData: [
                {bar: barA},
                {bar: barB},
                {bar: barC},
                {bar: barD},
                {bar: barE},
                {bar: Wings},
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
            let clas = document.getElementsByClassName("opac-this")
            for(let i=0; i < clas.length; i++){
                clas[i].style.opacity = 1 - st/400
                clas[i].style.transform = 'translateY('+ st/-10 +'px)'
            }
            
            if(window.innerWidth <= 1150){
                if(window.pageYOffset > 500){ 
                    document.getElementById("screenId").style.opacity= 1
                    if (st >= lastScroll) this.setState({setScroll: true}) 
                    else if (st < nextScroll) this.setState({setScroll: false}) 
                    lastScroll = st 
                    setTimeout(()=>{nextScroll = st - 100}, 100)   
                }else {
                    this.setState({setRight: false, setScroll: false})
                    document.getElementById("screenId").style.opacity= 0 + st/500 
                }
            } else {
                document.getElementById('hTag').style.opacity = 1 - st/300
                window.pageYOffset > 100 ? this.setState({setMove: true})
                : this.setState({setMove: false})       
            }
        }
        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
            window.innerWidth <= 1150 ? this.setState({setMobile: true, setLogo: false}) : this.setState({setMobile: false, setLogo: true})
            window.location.pathname === '/Resume/Home' ? this.setState({setHome: true }) : this.setState({setHome: false })
        }))
    }

    openNav() {
        let nav = document.getElementById("navId")
        let htag = nav.querySelector("h1")
        if(this.state.setNav===false){
            nav.style.zIndex = 5
            if(window.innerWidth >= 1150) htag.style.opacity= 1
            this.setState({setNav: true}) 
            setTimeout(()=> this.setState({setClass: true}),50)
        } else if (this.state.setNav===true) {
            this.setState({setClass: false})
            //window.innerWidth > 600 ? htag.style.opacity= 0 : htag.style.opacity= 1
            setTimeout(()=>{
            this.setState({setNav: false})
            if(window.innerWidth >= 1150) nav.style.zIndex = 0 
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
                    if(window.innerWidth >= 1150)nav.style.zIndex = 0
                }, 450)
                setTimeout(() => {
                    nav.style.opacity = 1
                    htag.innerHTML = name
                    this.setState({setIndex: i, setAbout: a, setPort: p})
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
        
            toLinks("home", "HOME", true, false, false)
            toLinks("about", "ABOUT", false, true, false)
            toLinks("port", "PORTFOLIO", false, false, true)
            setTimeout(() => window.location.pathname === '/Resume/Home' ? this.setState({setHome: true }) : this.setState({setHome: false}), 1500)
        setTimeout(() => this.setState({setUl: false, setLoad: false, setNav: false}),2000)
        return ct
    }

    render(){   
        return(
            <header className={`column ${this.state.setClass? `nav-on` : `nav-off`} ${this.props.PageSwitch}`}>         
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
                {this.state.setLogo ? <SVG className="opac-this fix" src={'../../../images/Logo.svg'} id={`Logo`}/> : null}
                {this.state.setMobile ? <div className="opac-this heading fix column-c-c" id="lower">
                    <SVG className="opac-this" src={'../../../images/Logo.svg'}/>
                    {this.state.setHome ? <div className="column-c-c">
                        <h1>Providing Bold Intuitive Design and Programming</h1>
                        <h1>Scroll Down to Learn More</h1>
                    </div>: null}
                </div>: null}
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
                        }): null
                    }
                    </ul>
                    :null}
            </header>
        )
    }
}
