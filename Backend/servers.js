const express = require('express');
const mongoose = require('mongoose')
const app = express();

const PORT = 8000;
const DB_URL = 'mongodb+srv://binod:bino1999@cluster0.l1h44vy.mongodb.net/Spm_Project?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
.then( ()=>{
    console.log('DB Connect');
})
.catch((err) => console.log('DB connection error ', err));

app.listen(PORT ,() =>{
    console.log(`App is running on ${PORT}`);

});

