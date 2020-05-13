import './styles/Apps.css'
import React, { useCallback, useState, useEffect } from 'react'
import Cursor from './Components/cursor/cursor-container'
import Header from './Header/header-container'
import Canvas from './Components/Canvas/canvas.jsx'
import Footer from './Footer/footer-container'
import Index from './IndexPage/index-container'
import Portfolio from './PortfolioPage/portfolioPage.jsx'
import About from './aboutPage/about-container'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleLoad } from '../util/globalUtilities'
import { imgArray } from '../reducers/layout/data/pieces'

const appHistory = createBrowserHistory()

const App = props => {
  const { smoothScroll } = props
  const [imgState, setImg] = useState(false)

  let load = useCallback(() => {
    appHistory.push(window.location.pathname)
    if (window.innerWidth > 1030) smoothScroll()
    setTimeout(() => setImg(true), 1000)
    setTimeout(() => setImg(false), 10000)
  }, [smoothScroll])
  handleLoad(load)

  return (
    <Router>
      {/*imgState
        ? imgArray.map(hit => <img src={hit} style={{ display: 'none' }} />)
      : null*/}
      {window.innerWidth > 1030 ? <Cursor /> : null}
      <Header />
      <Canvas />
      <Switch>
        <Route path="/resume/home" component={Index} />
        <Route path="/resume/about" component={About} />
        <Route path="/resume/portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App
