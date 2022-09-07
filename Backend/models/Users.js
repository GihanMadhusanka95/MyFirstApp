const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({

     Name:{
        type:String,
        required:true
     },

     ContactNumber:{
        type:String,
        required:true
     },

     Email:{
        type:String,
        required:true
     }

});

module.exports  = mongoose.model('Users',UserSchema);