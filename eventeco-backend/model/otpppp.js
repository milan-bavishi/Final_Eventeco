const mongoose = require('mongoose');

const otpppppSchema =  mongoose.Schema({
    otp:{
        type : String,
        required : true
    },
    createdAt :{
        type : String,
        required : true,
        default : Date.now()
    },
    email:{
        type : String,
        required : true
    },
    eventname:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('otppppp',otpppppSchema);