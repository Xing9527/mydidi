var express = require('express');
var router = express.Router();
var admin = require('../database/model/admin');
var session = require('express-session')

router.post('/',(req,res) => {
    let {username,pwd} = req.body;
    admin.findOne({username},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"登录失败",
                ret:false
            })
            return
        }
        if(data == null){
            res.json({
                data:"该用户不存在",
                code:400,
                msg:"false",
                ret:false
            })
            return
        }else if(pwd != data.pwd) {
            console.log(data)
            res.json({
                data:"密码错误",
                code:400,
                msg:"false",
                ret:false
            })
            return
        }else{
            req.session.admin = data;
            res.json({
                data:"success",
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
})

router.get('/isLogin',(req,res) => {
    console.log(req.url)
    if(req.session.admin) {
        res.json({
            data:"用户已登录",
            code:200,
            msg:"success",
            ret:true
        })
        return
    }else{
        res.json({
            data:"用户未登录",
            code:400,
            msg:"false",
            ret:false
        })
    }
})

router.get('/logout',(req,res) => {
    if(req.session.admin) {
        req.session.admin = null;
        res.json({
            data:"退出登录成功",
            code:200,
            msg:"success",
            ret:true
        })
        return
    }else{
        res.json({
            data:"用户未登录",
            code:400,
            msg:"false",
            ret:false
        })
    }
})

module.exports = router;