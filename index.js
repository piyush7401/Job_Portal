const express = require("express");
const { connection} = require("mongoose");


const app = express();

// connection to database

connection;



app.get("/",(req,res) =>{
    res.send("hello");
});

const port =8000;

app.listen(port, () =>{
    console.log('Server Running');
});

