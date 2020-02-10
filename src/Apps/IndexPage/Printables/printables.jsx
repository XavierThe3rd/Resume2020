import React, {useState} from 'react'
import Option from '../../Components/Options/options.jsx'
import comps from '../../Components/U-Components/u-components.jsx'
import styles from './styles.scss'
import get from './data.js'

const Printables = () => {
    const [widthState, setWidth] = useState(true)

    window.addEventListener('load', ()=>{
        setWidth(window.innerWidth)
    });
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
    });
    return (
        <div className="prints column">
            <comps.Title Color={styles.pureWhite} Class="index_header_out">{get.heading}</comps.Title>
            {get.options.map(hit => {
                return (
                <Option Key={hit.index} Title={hit.title}>
                {widthState > 1085 ? <comps.Embed
                    Type={`application/pdf`}
                    Emb={`application/x-google-chrome-pdf`}
                    Search={hit.search}
                    Stream={`chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/acc42426-e295-44bc-aac1-101442fb80bd`}
                /> : <comps.Link too={hit.search}>{hit.name}</comps.Link>}
                </Option>
                
                )
            })}
           
        </div>
    )
}

export default Printables


