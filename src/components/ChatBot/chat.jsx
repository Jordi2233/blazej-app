const start = [{
        id: 1,
        msg: "Hi, I'm Błażej's bot."
    },
    {
        id: 2,
        msg: "How can i help you?"
    }

]




const opt = [{
            id: 0,
            usrMsg: {
                type: "ans",
                content: "I just want to say Hi!"
            },
            botMsg: {
                type: "bot",
                content: ["Hello!","Nice to meet you!", "I Hope you enjoyed my website."],
            },
        },
        {
            id: 1,
            usrMsg: {
                type: "ans",
                content: "I want to contact with you!"
            },
            botMsg: {
                type: "bot",
                content: ["Cool!", "Send me a message here:", 
                "bazdej@gmail.com", 
                <form action="mailto: bazdej@gmail.com" method="post"
                enctype="text/plain">
            
                <input type="text" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message"></textarea>
                <button className="FormBtn">Send</button>
            
            </form>,
                  
                ]
            }
        },
        {
            id: 2,
            usrMsg: {
                type: "ans",
                content: "I want your CV."
            },
            botMsg: {
                type: "bot",
                content: ["Well.", "Here it is:", <a href="https://drive.google.com/file/d/1LlJOPql4CPaLBHrm3ThVT_E8tslwgT5u/view?usp=sharing" target="blank"><button className="button-27">CV</button></a>]
                }
            },
        ];

        export {
            start,
            opt
        };