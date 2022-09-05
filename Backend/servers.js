const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');

const app = express();


// import routes 

const UsersRoutes = require('./routes/Users');


app.use(bodyparser.json());

// route middleware
app.use(UsersRoutes);

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

