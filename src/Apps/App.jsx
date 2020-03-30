import React, { useEffect } from 'react'
import Cursor from './Components/cursor/cursor-container'
import Header from './Header/header-container'
import Canvas from './Components/Canvas/canvas.jsx'
import Footer from './Footer/footer-container'
import Index from './IndexPage/index-container'
import Portfolio from './PortfolioPage/portfolioPage.jsx'
import About from './aboutPage/about-container'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/Apps.css'

const appHistory = createBrowserHistory()

const App = props => {
  const { smoothScroll } = props

  appHistory.push('/Resume/Home')
  window.scrollTo(0, 0)

  useEffect(() => {
    window.innerWidth > 1030 ? smoothScroll() : null
  })

  return (
    <Router>
      {window.innerWidth > 1030 ? <Cursor /> : null}
      <Header />
      <Canvas />
      <Switch>
        <Route path="/Resume/Home" component={Index} />
        <Route path="/Resume/About" component={About} />
        <Route path="/Resume/Portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App
