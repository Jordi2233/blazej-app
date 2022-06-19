import React from "react";
import Bg from "./Bg";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useWindowSize from "../../../ScreenResolution";



const Home = () => {

    const size = useWindowSize().width;

return (
<div className="Home" id="Work" >

    <div className="HomeGrid">
    <div className="Background">

        {size > 600 ? <Bg value="400" /> : <Bg value="50"/>}



        <div className="HomeHeader">
            <div>

            <h1>Hello. I am Błażej.</h1> 
            <p>A self-taught Programmer!</p>
            </div>


        </div>

    <div className="ScrollDownDiv">
    <a href="#Works">

    <FontAwesomeIcon icon={faChevronDown} />
    </a>
    </div>

    </div>
    </div>
</div>
)
}

export default Home;