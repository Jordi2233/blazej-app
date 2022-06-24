import React, {useState} from "react";
import "./About.css"
import {SkillsBig, SkillsSmall} from "./Skills";
import skillItem from "./skillsItems";
import ScrollTrigger from 'react-scroll-trigger';
import useWindowSize from "../../../ScreenResolution";

const About = () => {

    const size = useWindowSize().width;

    const [widthBig, setWidthBig] = useState(110);
    const [widthSmall, setWidthSmall] = useState(60);

   const onEnterViewport = () => {
        setWidthBig(700);
        setWidthSmall(310);
      }
      


return (

<div id="About" className="About">
{ size > 1400 && <>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 1000, right: 500} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 1200, left: 200} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 1000, left: 500} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 1300, right: 100} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 1650, right: 600} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 2300, left: 400} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 2400, right: 400} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud" style={ {top: 3000, left: 200} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud" style={ {top: 2900, right: 300} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud" style={ {top: 2600, left: 600} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud" style={ {top: 3500, left: 300} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud" style={ {top: 3700, right: 300} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud" style={ {top: 3300, right: 300} }/>
    <img src={require("../../../Pictures/cloud.png")} alt="cloud" className="cloud"  style={{top: 3300, left: 600} }/>
</>
}
    <div className="AboutGrid">
    <div className="AboutHeader">
        <h2>About me</h2>
    </div>
    <div className="Describe">
    <div className="AboutText">

<h3>I'm a young self taught programmer from Poland. </h3>
<p>
    I have been studying for the last 4 years computer science and by 2 years programming in
    different
    technologies.
    I started with c ++, now I've been perfecting JavaScript for a long time and my
    focus is on Web development.
    <br /> <br /> Programming is my
    passion, I
    try to be better every day. I always wanted to be good at it, but now I want to be the best.
    Here are some technologies that I have learned so far:
</p>

</div>
<ScrollTrigger onEnter={onEnterViewport}>
    <div className="SkillsGrid" >
       { skillItem.map((item) => size > 700 ? <SkillsBig key={item.id}  name={item.name} img={item.img} width={item.imgWidth} height={item.imgHeight} style={{backgroundColor: item.color, maxWidth: item.maxWidth, width: widthBig}}/> : <SkillsSmall name={item.name} key={item.id} img={item.img} width={item.imgWidth} height={item.imgHeight} style={{backgroundColor: item.color, maxWidth: item.maxWidth, width: widthSmall}}/>)}
    </div>
    </ScrollTrigger>

    </div>
   
    </div>
</div>
)
}

export default About;