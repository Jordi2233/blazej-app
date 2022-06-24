import randomColor from "randomcolor";

const size = window.innerWidth;

const width = size > 700 ? 60 : 25;
const height = size > 700 ? 45 : 20;


console.log(size)


var color1 = randomColor({
    luminosity: 'light',
});
var color2 = randomColor({
    luminosity: 'light',
});
var color3 = randomColor({
    luminosity: 'light',
    hue: "blue"
});
var color4 = randomColor({
    luminosity: 'light',
    hue: 'yellow'
});
var color5 = randomColor({
    luminosity: 'light',
});
var color6 = randomColor({
    luminosity: 'light',
});
var color7 = randomColor({
    luminosity: 'light',
});
// var color8 = randomColor({
//     luminosity: 'light',
// });
var color9 = randomColor({
    luminosity: 'light',
});
var color10 = randomColor({
    luminosity: 'light',
});
var color11 = randomColor({
    luminosity: 'light',
});



const skillItem = [{
        id: 1,
        name: "HTML",
        img: size > 700 ? require("../../../Pictures/Logos/html-5.webp") : require("../../../Pictures/Logos/html-5-small.webp"),
        imgWidth: width,
        color: color1,
        maxWidth: "100%"
    },
    {
        id: 2,
        name: "CSS",
        img: size > 700 ? require("../../../Pictures/Logos/css-3.webp") : require("../../../Pictures/Logos/css-3-small.webp"),
        imgWidth: width,
        color: color2,
        maxWidth: size > 700 ? "88%" : "80%"
    },
    {
        id: 3,
        name: "JavaScript",
        img: require("../../../Pictures/Logos/javascript.webp"),
        imgWidth: width,
        color: color3,
        maxWidth: size > 700 ? "85%" : "77%"
    },
    {
        id: 4,
        name: "React",
        img: require("../../../Pictures/Logos/react.webp"),
        imgWidth: width,
        color: color4,
        maxWidth: size > 700 ? "82%" : "74%"
    },
    {
        id: 5,
        name: "Node.js",
        img: require("../../../Pictures/Logos/nodejs.webp"),
        imgHeight: size > 700 ? height : 25,
        color: color5,
        maxWidth: size > 700 ? "76%" : "68%"
    },
    {
        id: 6,
        name: "Express.js",
        img: require("../../../Pictures/Logos/express.webp"),
        imgHeight: height,
        color: color6,
        maxWidth: size > 700 ? "76%" : "68%"
    },
    {
        id: 7,
        name: "Bootstrap",
        img: require("../../../Pictures/Logos/bootstrap.webp"),
        imgWidth: width,
        color: color7,
        maxWidth: size > 700 ? "69%" : "61%"
    },
    {
        id: 9,
        name: "Git",
        img: require("../../../Pictures/Logos/git-icon.webp"),
        imgWidth: width,
        color: color9,
        maxWidth: size > 700 ? "88%" : "80%"
    },
    {
        id: 10,
        name: "MongoDb",
        img: require("../../../Pictures/Logos/mongodb2.webp"),
        imgWidth: width,
        color: color10,
        maxWidth: size > 700 ? "80%" : "72%"
    },
    {
        id: 11,
        name: "MySql",
        img: require("../../../Pictures/Logos/mysql.webp"),
        imgWidth: width,
        color: color11,
        maxWidth: size > 700 ? "70%" : "62%"
    },
]

export default skillItem;