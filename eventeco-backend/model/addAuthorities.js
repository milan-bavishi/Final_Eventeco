const mongoose = require('mongoose');

const addauthoritiesSchema = mongoose.Schema({

    eventname: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    useremail:{
        type:String,
        required:true,
    },
    joinedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('authorities', addauthoritiesSchema);
