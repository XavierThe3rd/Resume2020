/* eslint-disable no-unused-expressions */
import styles from './styles.scss' 
import React, {useReducer, useState, useRef, useEffect} from 'react'
import ProjectPiece from '../Components/portfolioCards/portfolioPiece.jsx'
import portfolio from './data.js'
import Arrow from '../../../images/Arrow.svg'
import SVG from 'react-inlinesvg';


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
  const scrollView = useRef(null);
  const [outStateR, setOutR] = useState(null)
  const [outStateL, setOutL] = useState(null)
  const [inStateR, setInR] = useState(null)
  const [inStateL, setInL] = useState(null)
  const [mobileState, setMobile] = useState(true)

  let val = portfolio.cardDataA.map( hit => hit.index)
  let total = Number.isInteger(val.length/6) ? val.slice(0, val.length/6) : val.slice(0, (val.length/6)+1)

  let cardComp = (dec, inc) => {
    return <div className={`wrp-c 
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
  let countProp = (typ, a, b) => {
      setOutR(a); setOutL(b)
      scrollView.current.scrollIntoView({behavior:'smooth'})
      setTimeout(()=> setCount({type:typ}), 400)
      setTimeout(()=> {setOutR(false); setInR(a); setOutL(false); setInL(b)}, 400)
      setTimeout(()=> {setInR(false); setInL(false)}, 800)
  }

  let countDown = () => {
    if(countState.count >= 2)
    countProp('decrement', true, false)
  }

  let countUp = () => {
    if(countState.count <= (total.length-1))
    countProp('increment', false, true)
  }

  let currentCount = e => {
    let ct = e.currentTarget
    setTimeout(() => countState.count=ct.value | null, 0, ct)
    countProp('current', false, true)
    return ct
  }

  useEffect(()=>{
    ["resize", "load"].forEach(event => window.addEventListener(event, ()=> {
      window.innerWidth < 1000 ? setMobile(false) : setMobile(true)
    }))
  })

  return <div>
        <div className="port_holder column" ref={scrollView}>
            {mobileState ? val.map(hit=> {
                if(countState.count=== hit) return cardComp([(hit * 6) -5] , [hit * 6])
            }): cardComp(1,100)}
            <div className="button_holder flx-c-c">
                {mobileState ?<div className="button_holder flx-b-c">
                  <button onClick={countDown}><SVG src={Arrow}/></button>
                  { total.map(hit => { return <input value={hit} type='button'
                    className={countState.count === hit ? 'inp-on' : 'inp-off'}
                    onClick={currentCount}
                  />})}
                  <button onClick={countUp}><SVG src={Arrow}/></button>
                </div>: null}
            </div>
        </div>
    </div>
}


export default PrimePortfolio