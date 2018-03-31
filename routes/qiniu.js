var express = require('express');
var router = express.Router();
var qiniuConfig = require('../util/qiniuConfig');  //引入封装的七牛配置文件
var token = qiniuConfig();  //调用方法获取一个token

router.get('/upload',(req,res) => {
    res.json({  //访问/upload返回一个json字符串，获取到token
        data:token,
        code:200,
        msg:"success",
        ret:true
    })
});

module.exports = router;