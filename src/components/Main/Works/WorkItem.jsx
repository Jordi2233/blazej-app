import React from "react";
import useWindowSize from "../../../ScreenResolution";

const WorkItem = (props) => {

const size = useWindowSize().width;


return (
<div className="WorkItem" >
<div className="Hover" >


<div>

<h4>{props.name}</h4>
</div>

<div className="WorkBtn">
<a href={props.demo}>
<button className="button-27"><span> Demo </span></button>
</a>
<a href={props.git}>
<button className="button-27"><span> GitHub </span></button>
</a>
</div>

{size > 600 &&  <div className="WorkTech">
        {props.tech}
    </div>}
   

</div>


    <div className="WorkImg">
        <img src={props.src} alt="props.name" />
        {size < 600 && <p className="ImgText" style={{color: props.color}}>Click me!</p>}
    </div> 
   
   
 

</div>
)

}

export default WorkItem;



// {isHovering &&
//     <div className="Hover">

//         <h4>{props.name}</h4>

//         <a href={props.demo}>
//         <button>Live Demo</button>
//         </a>
//         <a href={props.git}>
//         <button>GitHub</button>
//         </a>

//     </div>}

//     <div className="WorkImg">
//         <img src={props.src} alt="props.name" />
//     </div>