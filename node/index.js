const express = require('express');
const port = 8000;


const app = express();

app.use(express.Router())

app.use('/', require('./routes'));




app.listen(port,(err)=>{
    if(!err){
    console.log("Server Listening");}
    else{
        console.log(err)
    }
});