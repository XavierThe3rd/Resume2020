/* eslint-disable no-unused-expressions */
import React, {useState, useEffect, useRef} from 'react'
import styles from './styles.scss'
//import {headerData} from './headerData.js'
//import Wings from '../../../images/Wings.svg'
import SVG from 'react-inlinesvg';
import Navigation from './navigation/nav-container'

//let get = new headerData()

const Header = () => {
    let [scrollState, setScroll] = useState(false)
    let [mobileState, setMobile] = useState(false)
    let [moveState, setMove] = useState(false)
    let [homeState, setHome] = useState(false)
    let [logoState, setLogo] = useState(false)
    let lsRef = useRef(0)
    let nsRef = useRef(0)

    useEffect(()=>{

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
                    if (st >= lsRef.current) setScroll(true) 
                    else if (st < nsRef.current) setScroll(false) 
                    lsRef.current = st 
                    setTimeout(()=>{nsRef.current = st - 100}, 100)   
                }else {
                    //document.getElementById("screenId").style.opacity= 0 + st/500 
                }
            } else {
                //document.getElementById('hTag').style.opacity = 1 - st/300
                window.pageYOffset > 100 ? setMove(true)
                : setMove(false)       
            }
        }
        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
            window.innerWidth <= 1150 ? setMobile(true) | setLogo(false) : setMobile(false) | setLogo(true)
            window.location.pathname === '/Resume/Home' ? setHome(true) : setHome(false)
        }))
    })

    return (
        <header className={`column`}>         
            {logoState ? <SVG className="opac-this fix" src={'../../../images/Logo.svg'} id={`Logo`}/> : null}
            {mobileState ? <div className="opac-this heading fix column-c-c" id="lower">
                <SVG className="opac-this" src={'../../../images/Logo.svg'}/>
                {homeState ? <div className="column-c-c">
                    <h1>Providing Bold Intuitive Design and Programming</h1>
                    <h1>Scroll Down to Learn More</h1>
                </div>: null}
            </div>: null}
            <Navigation
                ScrollClassA={`${scrollState ? `nav-up`: `nav-down`}`}
                ScrollClassB={`nav ${moveState ? 'button-on' : 'button-off'}`}
            />
        </header>
    )
}

export default Header
/*
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setScroll: false, 
            setMobile: false, 
            setMove: false, 
            setHome : true,
            setLogo : false,
        };
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
                //document.getElementById('hTag').style.opacity = 1 - st/300
                window.pageYOffset > 100 ? this.setState({setMove: true})
                : this.setState({setMove: false})       
            }
        }
        ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
            window.innerWidth <= 1150 ? this.setState({setMobile: true, setLogo: false}) : this.setState({setMobile: false, setLogo: true})
            window.location.pathname === '/Resume/Home' ? this.setState({setHome: true }) : this.setState({setHome: false })
        }))
    }

    render(){   
        return(
            <header className={`column  ${this.props.PageSwitch}`}>         
                {this.state.setLogo ? <SVG className="opac-this fix" src={'../../../images/Logo.svg'} id={`Logo`}/> : null}
                {this.state.setMobile ? <div className="opac-this heading fix column-c-c" id="lower">
                    <SVG className="opac-this" src={'../../../images/Logo.svg'}/>
                    {this.state.setHome ? <div className="column-c-c">
                        <h1>Providing Bold Intuitive Design and Programming</h1>
                        <h1>Scroll Down to Learn More</h1>
                    </div>: null}
                </div>: null}
                <Navigation
                    ScrollClassA={`${this.state.setScroll ? `nav-up`: `nav-down`}`}
                    ScrollClassB={`nav ${this.state.setMove ? 'button-on' : 'button-off'}`}
                />
            </header>
        )
    }
}

Header.propTypes = {
    nav: PropTypes.bool,
    setNav: PropTypes.func
}
*/




