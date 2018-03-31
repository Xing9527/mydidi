var mongoose = require('mongoose');
var newSchema = new mongoose.Schema({
    username:{
        type:String
    },
    pwd:{
        type:String
    }
})

module.exports = mongoose.model('admin',newSchema,'admin');