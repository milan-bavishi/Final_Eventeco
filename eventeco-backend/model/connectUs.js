const mongoose = require('mongoose');

const ConnectusScema =  mongoose.Schema({
    
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    subject:{
        type: String,
        require : true
    },
    massage:{
        type: String,
        require : true
    }
});

module.exports = mongoose.model('Connectus',ConnectusScema);
