import comps from '../Components/U-Components/u-components.jsx'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import React from 'react'
import SVG from 'react-inlinesvg'
import styles from './styles.scss'

const Input = (props) => {
    return  <div className="inp_hold max-w" style={{height: 52}}>
      <input type="text"/>
      <label className="flx--c abs">{props.children}</label>
    </div>
  }
  
  const TextArea = (props) => {
    return <div className="text_hold column max-w" style={{height: 300}}>
      <label className="flx--c">{props.children}</label>
      <textarea />
    </div>
  }

const Footer = () => {
    let wings = localStorage.getItem('Wings');
    return (
        <footer className="column">
            <comps.Title Color={styles.conColor}>Contact...</comps.Title>
            <div className="flx-b">
                <form className="column" style={{ width: '45%'}}>
                    <comps.Header Color={styles.conColor}>Contact Form</comps.Header>
                    <Input>Name :</Input>
                    <Input>Email :</Input>
                    <Input>Subject :</Input>
                    <TextArea>Message :</TextArea>
                    <comps.Button Color={styles.conColor}>Submit</comps.Button>
                </form>
                <div className="column-b-e" style={{width: '55%'}}>
                    <div className="column--e">
                        <comps.Header Color={styles.conColor}>Contact Directly</comps.Header>
                        <comps.Link>tommy@kimtom.net <EmailIcon/></comps.Link>
                        <comps.Link>724-591-6354 <PhoneIcon/></comps.Link>
                    </div>
                    <div className="wing_holder column--e">
                        <SVG src={`../../images/Logo.svg`}/>
                    </div>
                    
                </div>
            </div>
            <span>All rights reserve Thomas Xavier Grasso Webpage and Graphic Design. More footer stuff should go here but I cant think of anything so whatever.</span>
        </footer>
    )
}

export default Footer