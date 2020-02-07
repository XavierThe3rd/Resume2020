import styles from './sass/settings.scss' 
import './styles.scss'
import ContentBox from './Components/ContentBox/contentBox.jsx'
import comps from './Components/U-Components/u-components.jsx'
import React, {useReducer, useState} from 'react'
import ProjectPiece from './Components/portfolioCards/portfolioPiece.jsx'
import portfolio from './getdata.js'
import { set } from 'mobx'
import { useEffect } from 'react'


const counter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1};
    case 'decrement':
      return { count: state.count - 1};
    default:
      throw new Error();
  }
};
const initial = {count: 1};


const Portfolio = ()=> {
  const [countState, setCount] = useReducer(counter, initial);
  const [inStateR, setInR] = useState(false)
  const [outStateR, setOutR] = useState(false)
  const [inStateL, setInL] = useState(false)
  const [outStateL, setOutL] = useState(false)

 
  let cardComp = (dec, inc) => {
    return <div className={`featured_holder wrp-b 
    ${inStateR ? `fade-in-r`: `fade-out-l`|
      outStateR ? `fade-out-r`: `fade-in-l`|
      inStateL ? `fade-in-l`: `fade-out-r`|
      outStateL ? `fade-out-l`: `fade-in-r`}`}>
      {portfolio.cardDataA.map(hit => {
        if(hit.index >= dec && hit.index <= inc){
        return <ProjectPiece
          Class={`featured_cards port_card`}
          Index={hit.index}
          Image={hit.image}
          Title= {hit.title}
          Desc={hit.desc}
          Project={hit.project}
          Type={hit.type}
          Color={hit.index < 12 ? hit.color : 'green'}
          Name={hit.name}/>
      }})}
    </div>
  }
  let countDown = () => {
    if(countState.count >= 2) {
      setOutR(true)
      setTimeout(()=> setCount({type:'decrement'}), 500)
      setTimeout(()=> setInR(true), 1000)
      setTimeout(()=> setInR(false) | setOutR(false) | setInL(true) | setOutL(true),1000)
    }
  }
  let countUp = () => {
    if(countState.count <= 2){
      setOutL(true)
      setTimeout(()=> setCount({type:'increment'}), 500)
      setTimeout(()=> setInL(true), 1000)
      setTimeout(()=> setInL(false) | setOutL(false) | setInR(true) | setOutR(true) ,1000)
    }
  }
  return<div className="port_holder column">
      {countState.count===1 ? cardComp(1, 6):
       countState.count===2 ? cardComp(7, 12):
       countState.count===3 ? cardComp(13, 18): false}
      <div className="featured_holder flx-c-c">
        <div className="button_holder flex">
          <button onClick={countDown}></button>
          <button onClick={countUp}></button>
        </div>
      </div>
  </div>
}

export default Portfolio