const mongoose = require('mongoose');

const subsribemailSchema =  mongoose.Schema({
    mailid:{
        type : String,
        required : true
    },
    createdAt :{
        type : String,
        required : true,
        default : Date.now()
    }
});

module.exports = mongoose.model('subsribemailSchema',subsribemailSchema);