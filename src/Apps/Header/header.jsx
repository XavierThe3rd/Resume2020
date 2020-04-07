import React from 'react'
import Heading from './heading/heading-container'
import Navigation from './navigation/nav-container'
import Loader from './Loader/loader-container'
import './styles.css'

let block = `header`

const Header = props => {
  let {
    htag,
    setHtag,
    setHome,
    setNav,
    setClass,
    tohome,
    setScroll,
    scroll,
    step,
    setStep,
    classState,
    navState,
    button,
    setButton
  } = props

  return (
    <header
      className={`${classState ? `nav-on` : `nav-off`} ${
        tohome ? (block = `index`) : (block = `other`)
      }`}
    >
      <Heading
        className={`${block}_heading`}
        tohome={tohome}
        step={step}
        setStep={setStep}
        navState={navState}
        setHome={setHome}
      />
      <Navigation
        className={`${block}_nav`}
        scroll={scroll}
        setHtag={setHtag}
        setNav={setNav}
        setClass={setClass}
        classState={classState}
        navState={navState}
        htag={htag}
        tohome={tohome}
        setScroll={setScroll}
        button={button}
        setButton={setButton}
      />
      <Loader
        className={`${block}_loader`}
        setScroll={setScroll}
        setNav={setNav}
        setClass={setClass}
        setHtag={setHtag}
        setHome={setHome}
        classState={classState}
        setStep={setStep}
        step={step}
        tohome={tohome}
        navState={navState}
        button={button}
        setButton={setButton}
      />
    </header>
  )
}

export default Header
