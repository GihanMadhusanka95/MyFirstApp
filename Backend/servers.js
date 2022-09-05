const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');

const app = express();


// import routes 

const UsersRoutes = require('./routes/Users');

const TrainDetailsRoutes = require('./routes/TrainDeails')

const NoticeRoutes = require('./routes/Notice')

const EmployeeRoutes = require('./routes/Employee')

app.use(bodyparser.json());

// route middleware
app.use(UsersRoutes);
app.use(TrainDetailsRoutes); 
app.use(NoticeRoutes);
app.use(EmployeeRoutes);




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

