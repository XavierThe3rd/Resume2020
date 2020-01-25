import styles from './App.scss';
//import styles from './Apps/sass/settings.scss'
import React from "react";
import nl2br from 'react-newline-to-break';
import FeaturedWork from './Apps/IndexPage/FeaturedWork/FeaturedWork.jsx';
import Specializations from './Apps/IndexPage/Specializations/Specializations.jsx';
import ContentBox from './Apps/Components/ContentBox/contentBox.jsx';
import comps from './Apps/Components/Buttons/buttons.jsx';
import Canvas from './Apps/Components/Canvas/canvas.jsx';
import Header from './Apps/Header/header.jsx';
//import {smoothScroll} from './smoothScroll.js'

const App = ()=> {
    //smoothScroll()
 
/*
    let sp = window.pageYOffset
    window.addEventListener('wheel', function(e) {
    e.preventDefault()
    
     
      function easer(t,b,c,d) {
        return c * (t /= d) * t + b;
        //return c * (t /= d) * (t - 2) + b;
    };
    let deltaY = e.deltaY; 
      let frame =()=> {
        deltaY < 0 ? sp-- : sp++
        let st = sp
        deltaY < 0 ? st-- : st++
        //document.querySelector("body").style.transform = 'translateY('+ -sp +'px)'
        //if(document.querySelector("body").style.transform > 'translateY(0px)'){
          //document.querySelector("body").style.transform = 'translateY(0px)'
        //}
        window.scrollTo(0, (st))
        //let wind= (a, b, c, d)=> window.scrollTo(0, (st/1.5) + easer(a, b, c, d))
        //wind(st/1.5, 200, 1, 500)
        setTimeout(()=> {
          clearInterval(id)
          //wind(st/2, st/2, st/2, st/2)
        },300)
      }
      let id = setInterval(frame, 1) 
  }, {passive: false})
  

  /*let i = 1
  let count = ()=>{
    console.log(i)
    return i++
  }
  setInterval(count, 500)*/
  
  

  return(
    <main>
      <Canvas/>
      <Header/>
      <section>
        <ContentBox Background={styles.bkColor}>
          <comps.Title Color={styles.conColor}>{nl2br('Provinding Bold Intuitive \n Design and Programming')}</comps.Title>
          <p>{'Based in the city of pittsburgh, for the past 2 years I have been aquiring my degree in Graphic Design while also accumulating a vast knowledge of front-end & backend programming skills on my own accord. Now finished I look forward to finally providing my skills to you and your company.'}</p>
          <comps.Button
            Click ={()=>console.log('button was clicked')}
            Color={styles.conColor}
          >Learn More!</comps.Button>
        </ContentBox>
        <Specializations/>
        <FeaturedWork/>
        <ContentBox Background={styles.bkColor} Align= 'center'>
          <comps.Title Color={styles.conColor}>Interned At...</comps.Title>
          <img src='../images/QintelLogo.png' alt='none'/>
          <comps.Button
            Color={styles.conColor}
            Click ={()=>console.log('button was clicked')}
          >Learn More!</comps.Button>
        </ContentBox>
      </section>
    </main>
  )
}

export default App
