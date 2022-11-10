import React, {useState, useEffect, useRef} from "react";
import "./ChatBoot.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { fadeInUp, fadeOutDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { start, opt } from "./chat";
import useGlobalState from "./showChat";


const ChatBot = () => {


const [anim, setAnim] = useState(Radium.keyframes(fadeInUp, 'fadeInUp'));
const styles = {
fadeInUp: {
animation: 'x .5s',
animationName: anim
},
}

const [state, setState] = useGlobalState('state');

const bottomRef = useRef(null);



const [allMsg, setAllMsg] = useState([{
type: "",
content: []
}]);

function showUserMsg(item) {

setAllMsg((prevMsg) => {
return [...prevMsg,{type: item.usrMsg.type, content: [<div ref={bottomRef}>{item.usrMsg.content}</div>] }, {type: item.botMsg.type, content:
item.botMsg.content.map((msg) =>{ return(msg)}) }]
})



}


useEffect(() => {

  bottomRef.current?.scrollIntoView({behavior: 'smooth',  block: "start"});
}, [allMsg]);


return (
<StyleRoot>
  <div className="ChatBot" style={styles.fadeInUp}>

    <div className="ChatGrid">
      <div className="ChatHeader">
        <img src={require("./bot.png")} alt="bot" />
        <div className="ChatHeaderText">
          <h4>Błażej's Bot</h4>
          <p>Ask me a question!</p>
        </div>
        <div onClick={()=> { setAnim(Radium.keyframes(fadeOutDown, 'fadeOutDown')); setTimeout(() => {
          setState(false);
          }, "400"); }} className="chatExit">

          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
      <div className="Chat">
        <div className="StillChat">
          {start.map((item) => <p key={item.id} className="bot">{item.msg}</p>)}
         
          {allMsg.map((item) => item.content.map((msg) => {return (<p  className={item.type}>{msg} {item.function}</p>
          )}))}
          

          <div className="ChatOptions">
            {opt.map((item) => <p key={item.id} id={item.id} onClick={()=> showUserMsg(item)}>{item.usrMsg.content}</p>
            )}
          </div>
        </div>
     
      </div>
    </div>


  </div>
</StyleRoot>
)

}

export default ChatBot;