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
  localStorage.setItem('myCat', 'Tom')
  var cat = localStorage.getItem('myCat');
  console.log(cat)
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
      </section>
        <FeaturedWork/>
      <section>
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
