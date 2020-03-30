const sslRedirect = require("heroku-ssl-redirect")
const express = require("express");
const app = express();
const request = require('request');

app.use(sslRedirect());
app.use(express.json());

app.use(express.static('public'));


app.get("/", (req, res) => {

    return res.sendFile(__dirname + "/public/index.html")

});



//BONUS APP - CORONA VIRUS TRACKER!

app.get("/view", (req, res) =>{
    request('https://corona.lmao.ninja/countries', (error, response, body) => {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 

    
    return res.send(body);

    });
});

app.get("/all", (req, res) =>{
    request('https://corona.lmao.ninja/all', (error, response, body) => {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 

    
    return res.send(body);

    });
});


console.log(process.env.PORT)
//if else, if port is defind then run PORT else run porn 5000
const port = process.env.PORT ? process.env.PORT : 5000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
