import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import useWindowSize from "../../../ScreenResolution"


const Bg = (props) => {

    const size = useWindowSize().width;

const options = {
        "autoPlay": true,
        "background": {
        "color": {
        "value": "transparent"
        },
        "opacity": 1
        },
        // "fullScreen": {
        // "enable": false,
        // "zIndex": -1
        // },
          "particles": {
            "fpsLimit": 100,
            "number": {
               "value": props.value,
              "density": {
                "enable": false
              }
            },
            "color": {
              "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
            },
            "shape": {
              "type": "circle",
              "size": {
                "width": 3
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacityMin": 0.1,
                "sync": true
              }
            },
            "size": {
              "value":  3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": size < 600 ? 15 : 40,
                "sizeMin": 0.1,
                "sync": false
              }
            },
            "lineLinked": {
              "enable": true,
              "distance": size < 600 ? 55 : 80,
              "color": "#000000",
              "opacity": 0.1,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed":  1.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "outMode": "bounce",
              "bounce": true
            }
          },
          "interactivity": {
            "detectOn": "canvas",
            "events": {
              "onHover": {
                "enable": true,
                "mode": "grab"
              },
              "onClick": {
                "enable": size < 600 ? false : true,
                "mode": "grab"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": size < 600 ? 100 : 100,
                "lineLinked": {
                  "opacity": 0.5,
                  "width": 1
                }
              },
              "repulse": {
                "distance": 119.88011988011989,
                "duration": 0.4
              }
            }
          },
          "retina_detect": true
        
        
        
}

const particlesInit =  (main) => {

 loadFull(main);
};

const particlesLoaded = (container) => {

};
return (



<Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />

);
};

export default Bg;


