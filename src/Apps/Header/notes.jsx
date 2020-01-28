import React, {useState} from 'react'
import './styles.scss'
import'./button.scss'
import headerData from './headerData.js'
import SVG from 'react-inlinesvg';
import SmallHamburger from '../Components/Hamburgers/smallHamburger.jsx'

let get = new headerData()


const Link = (props)=> {
    let list_styles={
        listStyle: 'none',
        cursor: 'pointer'
    }
    return <li style={list_styles} key={props.key}><a src={props.too}>{props.name}</a></li>
}

const HeaderList = (props)=> {
    return <nav className={`flx-b abs a-nav padder`} style={{top: 300}}> 
        <ul className={`padder ul-desk ${props.Class}`}>
            {get.navTags.map(get =>{ return <Link too={`#`} name={get.tag} key={get.index}/>})}
        </ul>
    </nav>
}

const scrollRot = (x, y)=> {
    let obj = document.getElementById(x)
    document.getElementById("rootD").addEventListener("scroll", ()=>{
      obj.style.transform = 'rotate('+ window.pageYOffset/y +'deg)'
    })
  }

const Button = ({Id, Class, Click,Content, Position, Ref, Width, Margin, Left, Right, Top})=> {
    return <button 
            id={Id} 
            className={Class}
            onClick={Click}
            style={{position: Position, margin: Margin, left: Left, right: Right, top: Top}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.9 239.9" ref={Ref} style={{width: Width}}>
            <circle cx="120" cy="120" r="118.5"/>
            <path d="M134.8,167.3A88.9,88.9,0,1,1,167.3,45.9,88.9,88.9,0,0,1,134.8,167.3Z"/>
        </svg>
        {Content()}
    </button> 
}

const Hamburger = ()=> {
    return <div className="hamburger">
        <span></span><span></span><span></span>
    </div>
}

const Navigation = (props)=> {
    return <nav className={`flx-b fix f-nav padder ${props.Change}`}> 
        <SVG className= "abs" src='../../../images/Wings.svg' style={{
            left: 50,
            top: 0,
            bottom: 0,
            margin: `auto 0`,
            width: 120,
            zIndex: 2
        }}
        />
        <ul className={props.Class}>{get.navTags.map(hit =>{ return <Link too={`#`} name={hit.tag} key={hit.index}/>})}</ul>                
    </nav>
}


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {setNav: false, setScroll: false, setMobile: false};
        this.scrollDown=this.scrollDown.bind(this);
        this.onResize=this.onResize.bind(this);
    }
   
    scrollDown(){
        let lastScroll = 100
        let nextScroll = 0 
        onscroll = ()=>{
            let st = window.pageYOffset 
            if(window.pageYOffset > 500){ 
                //this.setState({setNav: true})
  
                if (st >= lastScroll) this.setState({setScroll: true}) 
                else if (st < nextScroll) this.setState({setScroll: false}) 
                lastScroll = st <= 100 ? 100 : st
                setTimeout(()=>{nextScroll = st <= 100 ? 100 : st - 100}, 100)  
            
            }else {
                this.setState({setScroll: false})
                this.setState({setNav: false})
                document.getElementById('screenId').style.opacity= st/400
            }
        }
    }
    onResize(){
        window.addEventListener('resize', ()=> {
            (window.innerWidth < 900) ? this.setState({setMobile: true}) : this.setState({setMobile: false})
        })
    }

    render(){ 
        //localStorage.setItem('scroll', this.state.setScroll)    
        return(
            <header className="flx-c-c" style={{height: 500}} ref={this.scrollDown}>
                <span ref ={this.onResize}/>
                <h1 style={{
                    color: '#fff',
                    position: 'absolute',
                    left: 90,
                    top: 400,
                    fontSize: 72
                }}
                >Home</h1>
                <Button
                    Class="down"
                    Id="navButtonId"
                    Position={"fixed"} 
                    Click={()=> {
                        openNav(!navState) 
                        setTimeout(()=> navClass(!navDefine),50)
                    }}
                    Width={150 }
                    Top={ 100 }
                    Right={ 100 }
                    Content={()=>(<Hamburger/>)}
                />
                {/*{this.state.setMobile ?
                this.state.setNav ? 
                <Navigation Class={`ul-mobile`} Change={this.state.setScroll ? `nav-up`:`nav-down`}/>
                :<HeaderList Class={`ul-mobile`}/>
                :this.state.setNav ? 
                <Navigation Class={`ul-desk`} Change={this.state.setScroll ? `nav-up`:`nav-down`}/>
                :<HeaderList Class={`ul-desk`}/>}*/}
            </header>
        )
    }
}