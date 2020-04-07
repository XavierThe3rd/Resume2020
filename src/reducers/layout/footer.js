import { SET_FOOT_DATA } from '../../actions/z-names'
import Logo from '../../../images/Logo.svg'
import Email from '../../../images/EmailIcon.svg'
import Phone from '../../../images/PhoneIcon.svg'

const structure = {
  footdata: {
    path: '/Resume/Contact',
    Title: 'Contact...',
    contactF: 'Contact Form',
    inputs: [
      {
        title: 'Name :',
        name: 'name'
      },
      {
        title: 'Email :',
        name: 'email'
      },
      {
        title: 'Subject :',
        name: 'subject'
      }
    ],
    textareas: [
      {
        title: 'Message :',
        name: 'message'
      }
    ],
    buttons: [
      {
        title: 'Submit'
      }
    ],

    contactD: ['Contact Directly'],
    links: [
      {
        title: 'tommy@kimtom.net',
        icon: Email
      },
      {
        title: '724-591-6354',
        icon: Phone
      }
    ],
    Logo: Logo,
    notes:
      'All rights reserve Thomas Xavier Grasso Webpage and Graphic Design. More footer stuff should go here but I cant think of anything so whatever.'
  }
}

const footerdata = (state = structure, action) => {
  switch (action.type) {
    case SET_FOOT_DATA:
      return {
        ...state,
        footdata: structure.footdata
      }
    default:
      return state
  }
}

export default footerdata
