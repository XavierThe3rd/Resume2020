import styles from './styles.scss' 
import React, {useReducer, useState} from 'react'
import ProjectPiece from '../Components/portfolioCards/portfolioPiece.jsx'
import portfolio from './data.js'
import Arrow from '../../../images/arrow.svg'
import SVG from 'react-inlinesvg';
import ContentBox from '../Components/ContentBox/contentBox.jsx';


const counter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1};
    case 'decrement':
      return { count: state.count - 1};
      case 'current':
        return { count: state.count};
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
  let val = portfolio.cardDataA.map( hit => hit.index)
  let total = Number.isInteger(val.length/6) ? val.slice(0, val.length/6) : val.slice(0, (val.length/6)+1)
 
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
    if(countState.count <= (total.length-1)){
      setOutL(true)
      setTimeout(()=> setCount({type:'increment'}), 400)
      setTimeout(()=> {setOutL(false); setInL(true)}, 400)
      setTimeout(()=> {setInL(false)}, 800)
    }
  }

  let currentCount = e => {
    let ct = e.currentTarget
    setOutL(true)
    setTimeout(() => countState.count=ct.value | null, 0, ct)
    setTimeout(() => setCount({type:'current'}), 400, ct)
    setTimeout(()=> {setOutL(false); setInL(true)}, 400)
    setTimeout(()=> {setInL(false)}, 800)
    return ct
  }

  return <div>
        <div className="port_holder column">
            {val.map(hit=> {
              if(countState.count=== hit) return cardComp([(hit * 6) -5] , [hit * 6])
            })}
            <div className="button_holder flx-c-c">
                <div className="button_holder flx-b-c">
                <button onClick={countDown}><SVG src={Arrow}/></button>
                {total.map(hit => { return <input value={hit} type='button'
                  className={countState.count === hit ? 'inp-on' : 'inp-off'}
                  onClick={currentCount}
                />})}
                <button onClick={countUp}><SVG src={Arrow}/></button>
                </div>
            </div>
        </div>
    </div>
}

export default PrimePortfolio