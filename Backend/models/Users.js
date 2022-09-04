const mongoose = require('module');

const UserSchema =  new mongoose.Schema({

     Name:{
        type:String,
        required:true
     },

     ContatNumber:{
        type:String,
        required:true
     },

     Email:{
        type:String,
        required:true
     }

});

module.exports  = mongoose.model('Users',UserSchema)