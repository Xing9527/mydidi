const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    adress:{
        type:String
    },
    img:{
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

module.exports = mongoose.model('cases',newSchema,'cases')