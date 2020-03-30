import { connect } from 'react-redux'
import Form from './form.jsx'
import {
  setName,
  setEmail,
  setSubject,
  setMessage,
  setMore,
  setSent,
  setThanks
} from '../../../actions/footer'
import { setCursor } from '../../../actions/globals.js'

const mapStateToProps = state => {
  return {
    data: state.footerdata.footdata,
    name: state.footer.name,
    email: state.footer.email,
    subject: state.footer.subject,
    message: state.footer.message,
    more: state.footer.more,
    sent: state.footer.sent,
    thanks: state.footer.thanks
  }
}

const mapDispatchToProps = {
  setName: setName,
  setEmail: setEmail,
  setSubject: setSubject,
  setMessage: setMessage,
  setMore: setMore,
  setCursor: setCursor,
  setSent: setSent,
  setThanks: setThanks
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
