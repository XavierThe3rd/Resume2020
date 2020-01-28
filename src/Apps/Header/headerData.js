const headerData= ()=> {
    const Logo = '../../../images/Logo.svg'
    const navTags = [ 
        {
            index: 1,
            tag: 'home',
        },
        {
            index: 2,
            tag: 'about',
        },
        {
            index: 3,
            tag: 'portfolio',
        },
        {
            index: 4,
            tag: 'code',
        },
        {
            index: 5,
            tag: 'contact',
        },
    ]
    return{
        navTags,
        Logo
    }
}

export default headerData