const mongoose = require('mongoose');

const addeventSchema = mongoose.Schema({
    
    organizerName: {
        type: String,
        require: true
    },
    eventName: {
        type: String,
        require: true
    },
    organizerEmail: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    categories: {
        type: String,
        require: true
    },
    venue: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    id:{
        type : Number,
        required : true
    },
    email:{
        type:String,
        required:true,
    },
    joinedAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('addeventSchema', addeventSchema);
