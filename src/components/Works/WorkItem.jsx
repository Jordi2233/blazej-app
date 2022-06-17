import React from "react";


const WorkItem = (props) => {




return (
<div className="WorkItem" >
<div className="Hover" >


<div>

<h4>{props.name}</h4>
</div>

<div className="WorkBtn">
<a href={props.demo}>
<button className="button-75"><span> Live Demo </span></button>
</a>
<a href={props.git}>
<button className="button-75"><span> GitHub </span></button>
</a>
</div>


</div>


    <div className="WorkImg">
        <img src={props.src} alt="props.name" />
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