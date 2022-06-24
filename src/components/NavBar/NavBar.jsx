import React from "react";
import { useState } from "react";
import "./NavStyles/NavBar.css"
import "../../Fonts/Biotif/Biotif-Regular.ttf"
import NavItem from "./NavItem";
import NavSocial from "./NavSocial";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import useGlobalState from "../ChatBot/showChat";



const NavBar = () => {

  const [state, setState] = useGlobalState('state');

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{


     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

return (
<div className={colorChange ? 'NavBar colorChange' : 'NavBar'}>

    <div className="NavList">
    <div className="NavGridLinks">


{/* <NavItem name="Home" /> */}
<NavItem name="About" />
<NavItem name="Works" />
<NavItem name="Contact" click={()=> !state ? setState(true) : null} />
</div>
<div className="NavLogo">
    <a href="#Home">
    <img src={require("../../Pictures/Logos/BsLogo.png")} alt="" />
    </a>
    </div>

   

    <div className="NavSocialList">
        <NavSocial link="https://github.com/Jordi2233" name={<FontAwesomeIcon icon={faGithub} />}/>
        <NavSocial link="https://twitter.com/Maybe_Jordi" name={<FontAwesomeIcon icon={faTwitter} />}/>
        <NavSocial link="https://www.instagram.com/maybe_jordi/" name={<FontAwesomeIcon icon={faInstagram} />}/>
    </div>

    </div>




</div>
)

}

export default NavBar;