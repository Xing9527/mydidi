const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:String
    },
    pwd:{
        type:String
    },
    idNum:{
        type:String,
        default:''
    },
    sex:{
        type:Number,
        default:2
    },
    type:{
        type:Number,
        default:0
    }
});
module.exports = mongoose.model('users',newSchema,'users');