const express = require("express");
const app = express();
const port = 4000;
const path = require('path');

// for serving static files
app.use('/static',express.static('static'));

// setting template engine as pug
app.set('view engine','pug')

// set the views directory
app.set('views', path.join(__dirname,'views'));

// make directory of Views with file demo.pug

app.get('/demo',(req,res)=>{
    res.render('demo.pug')
});
// you will find the file serving on location url /demo
app.get('/',(req,res)=>{
    res.send('your server 2')
});
app.listen(port,()=>{
    console.log("you server is running");
})