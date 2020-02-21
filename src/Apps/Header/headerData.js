import barA from '../../../images/BarA.svg'
import barB from '../../../images/BarB.svg'
import barC from '../../../images/BarC.svg'
import barD from '../../../images/BarD.svg'
import barE from '../../../images/BarE.svg'

export const headerData = () => {
    const indexPage = [ 
        {
            index: 1,
            tag: 'ABOUT',
            ref: "/Resume/About",
            cls: 'about'
        },
        {
            index: 2,
            tag: 'PORTFOLIO',
            ref: "/Resume/Portfolio",
            cls: 'port'
        },
        {
            index: 3,
            tag: 'CONTACT',
            ref: "#",
            cls: 'contact'
        },
    ]

    const aboutPage = [ 
        {
            index: 1,
            tag: 'HOME',
            ref: "/Resume/Home",
            cls: 'home'
        },
        {
            index: 2,
            tag: 'PORTFOLIO',
            ref: "/Resume/Portfolio",
            cls: 'port'
        },
        {
            index: 3,
            tag: 'CONTACT',
            ref: "#",
            cls: 'contact'
        },
    ]

    const portPage = [ 
        {
            index: 1,
            tag: 'HOME',
            ref: "/Resume/Home",
            cls: 'home'
        },
        {
            index: 2,
            tag: 'ABOUT',
            ref: "/Resume/About",
            cls: 'about'
        },
        {
            index: 3,
            tag: 'CONTACT',
            ref: "#",
            cls: 'contact'
        },
    ]

    const codePage = [ 
        {
            index: 1,
            tag: 'HOME',
            ref: "/Home",
            cls: 'home'
        },
        {
            index: 2,
            tag: 'ABOUT',
            ref: "/About",
            cls: 'about'
        },
        {
            index: 3,
            tag: 'PORTFOLIO',
            ref: "/Portfolio",
            cls: 'port'
        },
        {
            index: 4,
            tag: 'CONTACT',
            ref: "#",
            cls: 'contact'
        },
    ]

    const bars= [barA, barB, barC, barD, barE]
    
      
    return{
        indexPage,
        aboutPage,
        portPage,
        codePage,
        bars
    }
}
