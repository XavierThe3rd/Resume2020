//import {useState} from 'react'

//import {useLocalState} from '../../localStorage.jsx'


export const headerData = () => {
    const Links = [ 
        {
            index: 1,
            tag: 'HOME',
            class: 'index'
        },
        {
            index: 2,
            tag: 'ABOUT',
        },
        {
            index: 3,
            tag: 'PORTFOLIO',
            class: 'portfolio'
        },
        {
            index: 4,
            tag: 'CODE',
        },
        {
            index: 5,
            tag: 'CONTACT',
        },
    ]
      
    return{
        Links,
    }
}
