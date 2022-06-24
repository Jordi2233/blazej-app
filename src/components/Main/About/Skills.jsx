import React from "react";


const SkillsBig = (props) => {
    return (
        <div className="Skills">
            <div className="ProgressBar" style={props.style}><p>{props.name}</p></div>
            <img src={props.img} alt={props.name} style={{height: props.height, width: props.width}}/>
        </div>
    )
}

const SkillsSmall = (props) => {
    return (
        <div className="Skills">
       
             <div className="ProgressBar" style={props.style}> <img src={props.img} alt={props.name} style={{height: props.height, width: props.width}}/></div>

        </div>
    )
}

export {SkillsBig, SkillsSmall};