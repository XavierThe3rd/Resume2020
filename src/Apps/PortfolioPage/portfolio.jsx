import './styles.scss' 
import React, {useReducer, useState} from 'react'
import ProjectPiece from '../Components/portfolioCards/portfolioPiece.jsx'
import portfolio from './data.js'
import ContentBox from '../Components/ContentBox/contentBox.jsx';


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


const PrimePortfolio = ()=> {
  const [countState, setCount] = useReducer(counter, initial);
  const [outStateR, setOutR] = useState(false)
  const [outStateL, setOutL] = useState(false)
  const [inStateR, setInR] = useState(false)
  const [inStateL, setInL] = useState(false)

 
  let cardComp = (dec, inc) => {
    return <div id="holderId" className={`wrp-c 
    ${outStateR ? `fade-out-l`: inStateR ? `fade-in-r` : null} 
    ${outStateL ? `fade-out-r`: inStateL ? `fade-in-l` : null}`}>
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
          Color={hit.color}
          Name={hit.name}/>
      }})}
    </div>
  }
  let countDown = () => {
    if(countState.count >= 2) {
      setOutR(true)
      setTimeout(()=> setCount({type:'decrement'}), 400)
      setTimeout(()=> {setOutR(false); setInR(true)}, 400)
      setTimeout(()=> {setInR(false)}, 800)
    }
  }
  let countUp = () => {
    if(countState.count <= 3){
      setOutL(true)
      setTimeout(()=> setCount({type:'increment'}), 400)
      setTimeout(()=> {setOutL(false); setInL(true)}, 400)
      setTimeout(()=> {setInL(false)}, 800)
    }
  }
  return <div>
        <div className="port_holder column">
            {countState.count===1 ? cardComp(1, 6):
            countState.count===2 ? cardComp(7, 12):
            countState.count===3 ? cardComp(13, 18): 
            countState.count===4 ? cardComp(19, 24):
            //countState.count===5 ? cardComp(13, 15):
            //countState.count===6 ? cardComp(16, 18): 
            //countState.count===7 ? cardComp(19, 21): 
            false}
            <div className="button_holder flx-c-c">
                <div className="button_holder flex">
                <button onClick={countDown}></button>
                <button onClick={countUp}></button>
                </div>
            </div>
        </div>
    </div>
}

export default PrimePortfolio