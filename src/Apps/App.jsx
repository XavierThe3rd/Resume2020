import './App.scss'
//import styles from './Apps/sass/settings.scss'
import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader'
//import './Apps/sass/generics.scss'
import Header from './Header/header-container'
import Canvas from './Components/Canvas/canvas.jsx'
import Footer from './Footer/footer.jsx'
import Index from './IndexPage/indexPage.jsx'
import About from './aboutPage/aboutPage.jsx'
import Portfolio from './PortfolioPage/portfolioPage.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SmoothScroll } from '../utilities/scrollin'
//import comps from './Apps/Components/U-Components/u-components.jsx';
import { createBrowserHistory } from 'history'
//import { smoothScroll } from '../utilities/greensock'
//import { TweenLite, Power4 } from 'gsap'

const App = () => {
  const appHistory = createBrowserHistory()
  appHistory.push('/Resume/Home')
  window.scrollTo(0, 0)
  let lastTouchEnd = 0

  document.addEventListener(
    'touchend',
    function(event) {
      var now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    },
    false
  )

  useEffect(() => {
    if (window.innerWidth > 1700) {
      new SmoothScroll()
    }
  })

  return (
    <Router>
      <Canvas />
      <Header></Header>
      <Switch>
        <Route exact path="/Resume/Home" component={Index} />
        <Route path="/Resume/About" component={About} />
        <Route path="/Resume/Portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App
