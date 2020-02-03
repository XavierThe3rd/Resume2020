
import './App.scss';
//import styles from './Apps/sass/settings.scss'
import React from "react";
//import './Apps/sass/generics.scss'
import Header from './Apps/Header/header.jsx';
import Canvas from './Apps/Components/Canvas/canvas.jsx';
import Footer from './Apps/Footer/footer.jsx';
import Index from './Apps/indexPage.jsx';
import About from './Apps/aboutPage.jsx';
import Portfolio from './Apps/portfolioPage.jsx';
import Code from './Apps/codePage.jsx';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter} from "react-router-dom";
//import comps from './Apps/Components/U-Components/u-components.jsx';



const App = ()=> {
  
  return(
    <BrowserRouter>
        <Canvas/>
        <Header></Header>
          <Switch>
              <Route exact path="/Home" component={Index} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Code" component={Code} />
          </Switch>
        <Footer/>
    </BrowserRouter>
    )
}

export default App