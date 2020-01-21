import React from 'react'
import styles from './styles.scss'
import SVG from 'react-inlinesvg';
import LightBulb from '../../../../images/LightBulb.svg'

const SpecCards = ({Index, Title, Image, Para})=>{  
      return (
        <div key={Index} className='spec_card flex' style={{
          cursor: 'pointer',
          background: styles.primePink,
        }}>
          <div className='screen_holder flx-c-c rel' style={{
            overflow: 'hidden',
          }}>
            <div className='flx-c-c' style={{
              zIndex: 3
            }}>
            <h1>{Title}</h1>
              <SVG src={Image}/>
            </div>
            <span className="screen abs" style={{
              right: 0,
              bottom: 0,
              background: 'linear-gradient(325deg, rgb(97, 0, 255) 10%, rgba(97, 0, 255, 0) 80%)',
            }}/>
          </div>
          <span className="text_holder abs">
            <p>{Para}</p>
          </span>
        </div>
    );
}

export default SpecCards