import text from '../Components/Generics/text-elms/text-elms.jsx'
import Button from '../Components/Generics/button/button.jsx'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Input from '../Components/Generics/input/input.jsx'
import TextArea from '../Components/Generics/textarea/textarea.jsx'
import React from 'react'
import SVG from 'react-inlinesvg'
import styles from './styles.scss'
import Logo from '../../../images/Logo.svg'

const Footer = () => {
  return (
    <footer className="column">
      <text.Title Color={styles.conColor}>Contact...</text.Title>
      <div className="form_holder flex">
        <form className="column" autoComplete="off">
          <text.Header Color={styles.conColor}>Contact Form</text.Header>
          <Input>Name :</Input>
          <Input>Email :</Input>
          <Input>Subject :</Input>
          <TextArea>Message :</TextArea>
          <Button>Submit</Button>
        </form>
        <div className="direct column-b">
          <div className="column">
            <text.Header Color={styles.conColor}>Contact Directly</text.Header>
            <text.Link>
              tommy@kimtom.net <EmailIcon />
            </text.Link>
            <text.Link>
              724-591-6354 <PhoneIcon />
            </text.Link>
          </div>
          <div className="wing_holder column--e">
            <SVG src={Logo} />
          </div>
        </div>
      </div>
      <span>
        All rights reserve Thomas Xavier Grasso Webpage and Graphic Design. More
        footer stuff should go here but I cant think of anything so whatever.
      </span>
    </footer>
  )
}

export default Footer
