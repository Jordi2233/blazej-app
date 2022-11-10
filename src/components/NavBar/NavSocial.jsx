import React from 'react'
import "./NavStyles/NavSocial.css"
const NavSocial=(props)=>{return(<div className="NavSocial"><a href={props.link}>{props.name}</a></div>)}
export default NavSocial