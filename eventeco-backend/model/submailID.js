const mongoose = require('mongoose');

const eventSchema =  mongoose.Schema({
    
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    id:{
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('event',eventSchema);