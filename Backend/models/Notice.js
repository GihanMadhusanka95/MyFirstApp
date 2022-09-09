const mongoose = require('mongoose');

const NoticeSchema =  new mongoose.Schema({

     Date:{
        type:Date,
        required:true
     },

     Notice:{
        type:String,
        required:true
     }
     
    

});

module.exports  = mongoose.model('Notice',NoticeSchema)