const mongoose = require('mongoose');

const userLoginSchema = mongoose.Schema({
firstName:{
    type:String,
    require:true
},
lastName:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
joinedAt:{
    type:Date,
    default:Date.now()
}
});

module.exports = mongoose.model('user',userLoginSchema);