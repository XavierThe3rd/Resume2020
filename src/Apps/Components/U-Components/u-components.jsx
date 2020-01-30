import React, {useState} from 'react'
import './styles.scss'

const Comps = ()=>{
    const Button = (props)=> {  
        return <button 
                className="prime_button flx-c-c" 
                onClick={props.Click}
                style={{
                    color: props.Color,
                    borderColor: props.Color
                }}>{props.children}</button>
    }

    const Title = (props)=> {  
        return <h1 className="h1" style={{
            color: props.Color,
        }}>{props.children}</h1>
    }

    const Header = (props)=> {
        return <h2 className="h2" style={{
            color: props.Color,
        }}>{props.children}</h2>
    }

    const SubHeader = (props)=> {  
        return <h3 className="h3" style={{
            color: props.Color,
        }}>{props.children}</h3>
    }

    const Link = (props)=> {
        let list_styles={
            listStyle: 'none',
            cursor: 'pointer'
        }
        return <li style={list_styles} 
            className="li"
            key={props.key}>
            <a href={props.too}>{props.children}</a>
        </li>
    }

    const Embed = (props)=> {
        return <object className="max-w" data={props.Search} style={{height:'95%'}}type={props.Type}>
            <embed type={props.Emb}
            src={props.Search} stream-url={props.Stream} 
            //background-color="0xFF525659" 
            top-toolbar-height="56" 
            javascript="allow" 
            full-frame=""/>
      </object>
    }

    return {
        Button: Button,
        Title: Title,
        Header: Header,
        SubHeader : SubHeader,
        Embed : Embed,
        Link : Link
    }
}

const comps= new Comps()

export default comps


