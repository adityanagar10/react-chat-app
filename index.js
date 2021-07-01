const express = require('express')
require('dotenv').config()
const config = require('./config/app')
const app = express();


app.get('/', (req,res)=> {
    res.send('hello')
})

const PORT = config.appPort

app.listen(PORT, () =>{
    console.log("server has started");
})