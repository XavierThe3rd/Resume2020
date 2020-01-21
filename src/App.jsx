import './generics.scss';
import React from "react";
import FeaturedWork from './Apps/IndexPage/FeaturedWork/FeaturedWork.jsx';
import Specializations from './Apps/IndexPage/Specializations/Specializations.jsx';


const App = ()=> {
  return(
    <main>
      <Specializations/>
      <FeaturedWork/>
    </main>
  )
    
}

export default App
