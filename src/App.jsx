import './App.scss';
//import styles from './Apps/sass/settings.scss'
import React, {useState} from "react";
//import './Apps/sass/generics.scss'
import Header from './Apps/Header/header.jsx';
import Canvas from './Apps/Components/Canvas/canvas.jsx';
import Footer from './Apps/Footer/footer.jsx';
import Index from './Apps/indexPage.jsx';
import Portfolio from './Apps/portfolioPage.jsx'
import comps from './Apps/Components/U-Components/u-components.jsx';


const App = ()=> {
  let [indexState, setIndex] = useState(true)
  let [portState, setPort] = useState(false)
  
  return(
    <main>
      <Canvas/>
      <Header>
        <comps.Link click={()=>setIndex(true)|setPort(false)}>Home</comps.Link>
        <comps.Link click={()=>setPort(true)|setIndex(false)}>About</comps.Link>
        <comps.Link click={()=>setPort(true)|setIndex(false)}>Portfolio</comps.Link>
        <comps.Link click={()=>setPort(true)|setIndex(false)}>Code</comps.Link>
        <comps.Link click={()=>setPort(true)|setIndex(false)}>Contact</comps.Link>
      </Header>
      {indexState ? <Index /> :null}
      {portState ? <Portfolio/> : null}
      <Footer/>
    </main>
    )
}



export default App
