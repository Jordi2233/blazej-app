import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import useWindowSize from "../../ScreenResolution"


const Bg = () => {

    const size = useWindowSize().width;

const options = {
    
        "autoPlay": true,
        "background": {
        "color": {
        "value": "#fefaf6"
        },
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
        "opacity": 1
        },
        "backgroundMask": {
        "composite": "destination-out",
        "cover": {
        "color": {
        "value": "#000"
        },
        "opacity": 1
        },
        "enable": false
        },
        "fullScreen": {
        "enable": false,
        "zIndex": -1
        },
          "particles": {
        
            "fpsLimit": 100,
            "number": {
               "value": size < 800 ? 150 : 400,
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
              "value": size > 800 ? 5 : 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": size < 800 ? 15 : 40,
                "sizeMin": 0.1,
                "sync": false
              }
            },
            "lineLinked": {
              "enable": true,
              "distance": 80,
              "color": "#000000",
              "opacity": 0.2,
              "width": size < 800 ? 0.5 : 1
            },
            "move": {
              "enable": true,
              "speed":  1.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "outMode": "out",
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
                "enable": size < 800 ? false : true,
                "mode": "grab"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": size < 800 ? 130 : 100,
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


