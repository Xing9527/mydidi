var mongoose = require('mongoose');
var newSchema = new mongoose.Schema({
    img:{
        type:String
    }
});


module.exports = mongoose.model('swiper',newSchema,'swiper')