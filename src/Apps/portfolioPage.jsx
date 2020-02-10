import React from 'react'
import PrimePortfolio from './PortfolioPage/portfolio.jsx'
import ContentBox from './Components/ContentBox/contentBox.jsx'
import comps from './Components/U-Components/u-components.jsx'




const Portfolio = ()=> {

  return<div className="port_page">

      <ContentBox Class='portbox' Height={5}></ContentBox>
     <PrimePortfolio/>
     <ContentBox Class='portbox' Height={5}></ContentBox>
  </div>
}

export default Portfolio