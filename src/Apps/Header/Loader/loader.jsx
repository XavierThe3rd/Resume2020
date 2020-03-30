import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'react-router-dom'
import './styles.css'

const block = `loader`

const Loader = props => {
  let {
    setNav,
    setClass,
    linkData,
    setHtag,
    navState,
    setHome,
    setOpac,
    setLoad,
    setScroll,
    load,
    setLClass,
    linkclass,
    bars,
    smoothScroll,
    setStep,
    step,
    tohome,
    setButton,
    setCursor
  } = props

  return navState ? (
    <div className={`${block} ${props.className}`}>
      <span className={`${block}_slider`} />
      <ul className={`${block}_slider`}>
        {load
          ? bars.map(hit => {
              return (
                <SVG
                  src={hit}
                  className={`${block}_svg ${
                    linkclass ? `${block}-on` : `${block}-out`
                  }`}
                />
              )
            })
          : linkData.map(get => {
              return window.location.pathname === get.loc
                ? get.data.map(hit => {
                    return (
                      <li key={hit.ind}>
                        <Link
                          to={hit.ref}
                          className={hit.cls}
                          onMouseEnter={() => setCursor(true)}
                          onMouseLeave={() => setCursor(false)}
                          onClick={() => {
                            setOpac(1)
                            setStep(true)
                            setCursor(false)
                            hit.tag === 'CONTACT'
                              ? document
                                  .querySelector('footer')
                                  .scrollIntoView() | setStep(false)
                              : window.scrollTo(0, 0)
                            setLoad(true)
                            setTimeout(() => setLClass(true), 100)
                            setTimeout(() => setHtag(hit.tag), 500)
                            setTimeout(() => setLClass(false), 750)
                            setTimeout(() => setClass(false), 1250)
                            setTimeout(() => {
                              smoothScroll()
                              setScroll(false) | setButton(false)
                              window.location.pathname === '/Resume/Home'
                                ? setHome(true)
                                : setHome(false)
                            }, 1500)
                            setTimeout(
                              () => setLoad(false) | setNav(false),
                              2000
                            )
                          }}
                        >
                          {hit.tag}
                        </Link>
                      </li>
                    )
                  })
                : null
            })}
      </ul>
      <span className={`${block}_slider`} />
      <span className={`${block}_slider`} />
    </div>
  ) : null
}

export default Loader
