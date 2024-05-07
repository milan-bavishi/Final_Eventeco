const mongoose = require('mongoose');

const personSchema = mongoose.Schema({

    code:{
        type : Number,
        required : true
    },
    eventname:{
        type: String,
        require:true
    },
    firstname:{
        type: String,
        require:true
    },
    lastname:{
        type: String,
        require:true
    },
    phonenumber:{
        type: String,
        require:true
    },
    gender:{
        type: String,
        require:true
    },
    personemail:{
        type: String,
        require:true
    },
    designation:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    joinedAt: {
        type: Date,
        default: Date.now()
    }
    }
)

module.exports = mongoose.model('addpersonSchema',personSchema);