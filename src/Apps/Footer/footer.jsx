import comps from '../Components/U-Components/u-components.jsx'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import React from 'react'
import SVG from 'react-inlinesvg'
import styles from './styles.scss'
import Logo from '../../../images/Logo.svg'


const Footer = () => {
    return (
        <footer className="column">
            <comps.Title Color={styles.conColor}>Contact...</comps.Title>
            <div className="form_holder flex">
                <form className="column">
                    <comps.Header Color={styles.conColor}>Contact Form</comps.Header>
                    <comps.Input>Name :</comps.Input>
                    <comps.Input>Email :</comps.Input>
                    <comps.Input>Subject :</comps.Input>
                    <comps.TextArea>Message :</comps.TextArea>
                    <comps.Button Color={styles.conColor}>Submit</comps.Button>
                </form>
                <div className="direct column-b">
                    <div className="column">
                        <comps.Header Color={styles.conColor}>Contact Directly</comps.Header>
                        <comps.Link>tommy@kimtom.net <EmailIcon/></comps.Link>
                        <comps.Link>724-591-6354 <PhoneIcon/></comps.Link>
                    </div>
                    <div className="wing_holder column--e">
                        <SVG src={Logo}/>
                    </div>
                    
                </div>
            </div>
            <span>All rights reserve Thomas Xavier Grasso Webpage and Graphic Design. More footer stuff should go here but I cant think of anything so whatever.</span>
        </footer>
    )
}

export default Footer