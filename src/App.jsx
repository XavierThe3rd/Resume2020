import './App.scss';
//import styles from './Apps/sass/settings.scss'
import React from "react";
import { hot } from 'react-hot-loader'
//import './Apps/sass/generics.scss'
import Header from './Apps/Header/header.jsx';
import Canvas from './Apps/Components/Canvas/canvas.jsx';
import Footer from './Apps/Footer/footer.jsx';
import Index from './Apps/IndexPage/indexPage.jsx';
import About from './Apps/aboutPage.jsx';
import Portfolio from './Apps/PortfolioPage/portfolioPage.jsx';
import Code from './Apps/codePage.jsx';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import comps from './Apps/Components/U-Components/u-components.jsx';
import { createBrowserHistory } from "history";



const App = () => {
    const appHistory = createBrowserHistory();
    appHistory.push('/Resume/Home');
    window.scrollTo(0, 0)
    let lastTouchEnd = 0;

    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    return(
        <Router>
            <Canvas/>
            <Header></Header>
                <Switch>
                    <Route exact path="/Resume/Home" component={Index} />
                    <Route path="/Resume/About" component={About} />
                    <Route path="/Resume/Portfolio" component={Portfolio} />
                    <Route path="/Resume/Code" component={Code} />
                </Switch>
            <Footer/>
        </Router>  
    )
}
export default hot(module)(App)