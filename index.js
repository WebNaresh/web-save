// npm i express pug
const express = require("express");
const app = express();
const port = 4000;
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const bodyparser = require('body-parser');


// connection to mongoose database
mongoose.connect('mongodb://localhost:27017/contactDance');

// defining mongoose schema 
const contactDance = new mongoose.Schema({
    name:String,
    age:Number,
    gmail:String,
    address:String,
    more:String
});

const contacts = mongoose.model('contacts', contactDance);


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
    // console.log(req.body);
    var myData = new contacts(req.body);
    myData.save().then(()=>{
        res.send("this item has been save to the database")
    }).catch(()=>{
        res.send("yout item has not been save")
    })

});


// Start the server 
app.listen(port,()=>{
    console.log("you server is running");
})