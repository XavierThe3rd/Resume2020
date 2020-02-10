import React from 'react'
import FeaturedWork from './IndexPage/FeaturedWork/FeaturedWork.jsx';
import Specializations from './IndexPage/Specializations/Specializations.jsx';
import ContentBox from './Components/ContentBox/contentBox.jsx';
import comps from './Components/U-Components/u-components.jsx';
import Printables from './IndexPage/Printables/printables.jsx';
import Qintel from '../../images/QintelLogo.png';
import styles from './sass/Apps.scss';
import './indexStyles.scss'


const Index = ()=> {
    return(
    <div>
        <section>
            <ContentBox Class="intro">
                <comps.Title Color={styles.conColor} Class="index_header_in">{'Provinding Bold Intuitive Design and Programming'}</comps.Title>
                <p>{'Based in the city of pittsburgh, for the past 2 years I have been aquiring my degree in Graphic Design while also accumulating a vast knowledge of front-end & backend programming skills on my own accord. Now finished I look forward to finally providing my skills to you and your company.'}</p>
                {/*<comps.Button
                    Click ={()=>console.log('button was clicked')}
                    Color={styles.conColor}
                >Learn More!</comps.Button>*/}
            </ContentBox>
            <Specializations/>
        </section>
        <FeaturedWork/>
        <section>
            <ContentBox Class="intro" Background={'linear-gradient(306deg, rgba(97,0,255,1) 0%, rgba(255,38,67,1) 100%)'} Align= 'center'>
            <comps.Title Color={styles.conColor} Class="index_header_in">Interned At...</comps.Title>
            <img src={Qintel} alt='none'/>
            </ContentBox>
            <Printables/>
        </section>
    </div>
    )
}
export default Index


