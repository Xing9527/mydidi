var mongoose = require('mongoose');
var newSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:Number
    },
    idNum:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    updateTime:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('clients',newSchema,'clients')