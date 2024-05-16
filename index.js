const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send({
        status: 200,
        data: 'test'
    });
});

app.post('/api/user',(req,res)=>{
    try{

    }catch {
        
    }
});

mongoose.connect("mongodb+srv://kamrul:kamrul170228@portfolio.by0fafa.mongodb.net/?retryWrites=true&w=majority&appName=portfolio")
.then(()=>{
    console.log("Connected to Database");
    app.listen(3000,()=>{
        console.log("Server is running at port 3000");
    });
})
.catch((e)=>{
    console.log("Connection Failed");
})