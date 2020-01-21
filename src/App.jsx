import './App.scss';
//import styles from './Apps/sass/settings.scss'
import React, {useState} from "react";
import nl2br from 'react-newline-to-break';
import FeaturedWork from './Apps/IndexPage/FeaturedWork/FeaturedWork.jsx';
import Specializations from './Apps/IndexPage/Specializations/Specializations.jsx';
import ContentBox from './Apps/Components/ContentBox/contentBox.jsx';
import Button from './Apps/Components/Buttons/buttons.jsx';



const App = ()=> {
  //let [scrollState, setScroll] = useState(false)


  window.addEventListener('scroll', ()=>{
      let st = window.pageYOffset
      console.log(st)
      //window.pageYOffset > 10 ? setScroll(true) : setScroll(false)
  })

  

  return(
    <main>
      <ContentBox
        Background= 'linear-gradient(67deg, rgba(5,19,35,1) 10%, rgba(255,38,67,1) 100%)'
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
      />
      <Specializations Margin={800}/>
      <FeaturedWork/>
      <ContentBox
        Background= 'linear-gradient(110deg, rgba(255,38,67,1) 0%, rgba(5,19,35,1) 90%)'
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
      />  
    </main>
  )
    
}

export default App
