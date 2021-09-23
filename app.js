const express = require("express");
const app = express();
const port = 5000;
const path = require('path');
const fs = require('fs');

// for serving static files
app.use('/static',express.static('static'));

// url encoded propety for express
app.use(express.urlencoded({extended:true}));

// setting template engine as pug
app.set('view engine','pug')

// set the views directory
app.set('views', path.join(__dirname,'views'));

// Endpoints

app.get('/',(req,res)=>{
    res.render('demo.pug')
});
app.post('/',(req,res)=>{
    console.log(req.body);
    name=req.body.name
    age=req.body.age
    gmail=req.body.gmail
    address=req.body.address
    more=req.body.more
    res.render('index.pug')
    let outputToWrite=` his name ${name}`;
    fs.writeFileSync('output.txt', outputToWrite);

});


// Start the server 
app.listen(port,()=>{
    console.log("you server is running");
})