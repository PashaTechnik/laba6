const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

function start(){
    mongoose.connect('', {
        useNewUrlParser:true,
        useFindAndModify:false
    })
    app.listen(PORT, () => {
        console.log("Server has been started...")
    })
}

start();