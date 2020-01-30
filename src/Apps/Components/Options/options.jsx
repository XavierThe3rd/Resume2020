import React, {useState} from 'react'
import comps from '../U-Components/u-components.jsx'
import styles from './styles.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Option = (props) => {
    let [optionState, setOption] = useState(false)
    localStorage.setItem('optionState', optionState)
  
    return  <div key={props.Key} id={`Option`} className={`option column max-w ${optionState ? `op-on` : `op-off` }`}>
      <button className="flx-b-c max-w" onClick={()=> {setOption(!optionState) | console.log('clicked')}}>
        <comps.SubHeader>{props.Title}</comps.SubHeader>
        <ExpandMoreIcon/>
      </button>
      <div className={`max-w obj-holder`}>
        {optionState ? props.children : null}
      </div>
    </div>
}

export default Option