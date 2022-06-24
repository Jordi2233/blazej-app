import React, { Fragment } from 'react';
import './App.css';
import Home from "./components/Main/Home/Home.jsx";
import Work from "./components/Main/Works/Work.jsx";
import About from './components/Main/About/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import useGlobalState from './components/ChatBot/showChat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';

function App() {

        const styles = {
                fadeIn: {
                  animation: 'x 5s',
                  animationName: Radium.keyframes(fadeIn, 'fadeIn')
                },
            
              }

        const [state, setState] = useGlobalState('state');
    
    return (
        <div className="App">
<Fragment>
        <NavBar style={{overflowY:"scroll", height:"80px"}}/>
        <div ></div> 
</Fragment>
        
        <Home />
        <About />
            <Work />

        {state ? <ChatBot  />   :   <StyleRoot><FontAwesomeIcon icon={faComment} style={styles.fadeIn} className="msg" onClick={()=> !state ? setState(true) : setState(false)} /></StyleRoot>}


<Footer />
        </div>
    );
}

export default App;
