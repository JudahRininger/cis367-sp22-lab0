const express = require('express');
const app = express();

const hostname = "localhost";
const port = 3000;

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res)=> {
    res.send(`<body>
                <header>
                <h1>Here is a picture of a certified hacker:</h1>
                    <img src="/img/Hacker.jpg" alt="Meadowlark Travel Logo"> 
                </header>
            </body>`);
    
});

app.get('/greet', (req, res)=>{
    let name = req.query.name;
    let year = parseInt(req.query.year);
    res.send(`<h1>Hello ${name}! \n You are ${2021-year} or ${2022-year} years old. <h1>`);
})

app.get('/math', (req, res)=>{
    res.send(`<h1> Please type "/" then a number, then times, plus, minus, or over, then another "/" and number ex: /5/plus/8 <h1>`)
})

app.get('/math/:num1/:string/:num2', (req, res)=>{
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let string = req.params.string;
    if (string == "times") {
        res.send(`<h1> ${num1 * num2} <h1>`)
    };
    if (string == "plus") {
        res.send(`<h1> ${num1 + num2} <h1>`)
    };
    if (string == "minus") {
        res.send(`<h1> ${num1 - num2} <h1>`)
    };
    if (string == "over") {
        res.send(`<h1> ${num1 / num2} <h1>`)
    };
    res.send(`<h1> please say: times, plus, minus, or over or I won't know what to do. <h1>`)
})

app.listen(port, ()=> {
    console.log(`Listening on http://${hostname}:${port} ...`);
});