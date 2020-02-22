export let toLoad = (e, props) => {
  let ct = e.currentTarget
  //let nav = document.getElementById("navId")
  //let htag = document.getElementById('hTag')
  let toLinks = (cls, name, i, a, p) => {
    if (ct.classList.contains(cls)) {
      //nav.style.opacity = 0
      setTimeout(() => {
        //if(window.innerWidth >= 1150)nav.style.zIndex = 0
      }, 450)
      setTimeout(
        () => {
          //nav.style.opacity = 1
          props.setHtag(name)
          props.setIndex(i)
          props.setAbout(a)
          props.setPort(p)
          window.scrollTo(0, 0)
        },
        500,
        ct
      )
    }
    if (ct.classList.contains('contact'))
      window.scrollTo(0, document.body.scrollHeight)
  }
  //setUl(true)
  props.setLoad(true)
  setTimeout(() => props.setLClass(true), 100)
  setTimeout(() => props.setLClass(false), 750)
  setTimeout(() => props.setClass(false), 1250)

  toLinks('home', 'HOME', true, false, false)
  toLinks('about', 'ABOUT', false, true, false)
  toLinks('port', 'PORTFOLIO', false, false, true)
  setTimeout(
    () =>
      window.location.pathname === '/Resume/Home'
        ? props.setHome(true)
        : props.setHome(false),
    1500
  )
  setTimeout(() => {
    /*setUl(false)*/ props.setLoad(false)
    props.setNav(false)
    props.setClass(false) /*setNav(false)*/
  }, 2000)
  //setTimeout(() => /*setUl(false)*/ setLoad(false) | setNav(false) | setClass(false)/*setNav(false)*/,1000)
  return ct
}
