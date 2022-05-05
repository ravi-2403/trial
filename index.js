const express = require("express")
const app = express();
var request = require('request')

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("hi i am groot!")
})




app.get("/data",(req,res)=>{
    res.sendFile(index.hbs);    
})


app.listen(port,()=>{
    console.log("listening to port "+port);
})