const express= require('express');
const app= express();
const path = require('path');
const mydata=require('./data.json');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home.ejs');

})

//app.get('/cats',(req,res)=>{
  //  console.log("CATS REQ")

//})

app.get('/r/:sub',(req,res)=>
{
    const {text} = req.params;
    const data = mydata[text];
    console.log(data);
    //res.render('sub', {text})
})

app.listen(3000,()=>{
    console.log("Listening to port..")
})