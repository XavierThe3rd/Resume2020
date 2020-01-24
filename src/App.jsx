import './App.scss';
//import styles from './Apps/sass/settings.scss'
import React from "react";
import nl2br from 'react-newline-to-break';
import FeaturedWork from './Apps/IndexPage/FeaturedWork/FeaturedWork.jsx';
import Specializations from './Apps/IndexPage/Specializations/Specializations.jsx';
import ContentBox from './Apps/Components/ContentBox/contentBox.jsx';
import Button from './Apps/Components/Buttons/buttons.jsx';
import {smoothScroll} from './smoothScroll.js'

const App = ()=> {
    smoothScroll()
 
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
      <ContentBox
        Background= 'linear-gradient(67deg, rgb(97, 0, 255) 10%, rgba(255,38,67,1) 100%)'
        Left={0}
        Title={nl2br('Provinding Bold Intuitive \n Design and Programming')}   
        Para={'Based in the city of pittsburgh, for the past 2 years I have been aquiring my degree in Graphic Design while also accumulating a vast knowledge of front-end & backend programming skills on my own accord. Now finished I look forward to finally providing my skills to you and your company.'}      
        ContentA={()=> null}
        ContentB={()=> null}
        ContentC={()=> (
          <Button
            Title={`Learn More!`} 
            Click ={()=>console.log('button was clicked')}
        />)}
        Id="indexIntro"
      />
      <Specializations/>
      <FeaturedWork/>
      <ContentBox
        Background= 'linear-gradient(110deg, rgba(255,38,67,1) 0%, rgb(97, 0, 255) 90%)'
        Right={0}
        Align='center'
        Title='Interned At...'   
        Para={''}      
        ContentA={()=> null}
        ContentB={()=> <img src='../images/QintelLogo.png' alt='none'/>}
        ContentC={()=> (
          <Button
            Title={`Learn More!`} 
            Click ={()=>console.log('button was clicked')}
        />)}
        Id="indexIntern"
      />  
    </main>
  )
    
}

export default App
