import React from "react";import "./WorkStyles.css";import WorkItem from "./WorkItem";import WorksItem from "./WorksItems"
const Work=()=>{return(<div className="Work" id="Works"><div className="WorkGrid"></div><div className="WorkHeader"><h2>My Works</h2></div><div className="WorkItems">{WorksItem.map((item)=>{return<WorkItem
name={item.name}
demo={item.demo}
git={item.github}
src={item.img}
tech={item.tech.map((tech)=>{return(<p>{tech}</p>)})}
color={item.color}
key={item.id}/>})}</div></div>)}
export default Work