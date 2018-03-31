const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
    contentText:{
        type:String,
    },
    content:{
        type:String
    },
    title:{
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
    },
    author:{
        type:String
    },
    id:{
        type:Number
    }
});
module.exports = mongoose.model('news',newSchema,'news');