import React from "react";
import Bg from "./Bg";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'




const Home = () => {

return (
<div className="Home" id="Works" >

    <div className="HomeGrid">
    <div className="Background">

        <Bg />

        <div className="HomeHeader">
            <div>

            <h1>Hello. I am Błażej.</h1> 
            <p>A self-taught Programmer!</p>
            </div>


        </div>

    <div className="ScrollDownDiv">
    <a href="#Work">

    <FontAwesomeIcon icon={faChevronDown} />
    </a>
    </div>

    </div>
    </div>
</div>
)
}

export default Home;