var express = require('express');
var router = express.Router();
var users = require('../database/model/users');
var validator = require('validator');
var md5 = require('blueimp-md5')

router.post('/register', (req,res) => {
    let{name,phone,pwd,idNum,sex,type} = req.body;  
    if(!phone || !validator.isMobilePhone(phone,'zh-CN')){
      res.json({
        data:"输入手机号不合法",
        code:400,
        msg:"输入手机号不合法",
        ret:false
      })
      return;
    }else if(!name || validator.isEmpty(name.trim())){
      res.json({
        data:"用户名不合法",
        code:400,
        msg:"用户名不合法",
        ret:false
      })
      return;
    }else if(!pwd || validator.isEmpty(pwd.trim())){
      res.json({
        data:"密码不合法",
        code:400,
        msg:"密码不合法",
        ret:false
      })
      return;
    }else{
      users.findOne({phone},(err,data) => {
        console.log(data)
        if(err){
          res.json({
            data:err,
            code:500,
            msg:"false",
            ret:false
          })
          return;
        }
        if(data != null){  //用户已被注册
          res.json({
            data:"用户已被注册",
            code:400,
            msg:"用户已被注册",
            ret:false
          })
          return;
        }else{ //  注册成功
          pwd = md5(pwd)
          users.create({name,phone,pwd,idNum,sex,type}, (err,data) => {
            if(err){
              res.json({
                data:"注册失败",
                code:500,
                msg:"注册失败",
                ret:false
              })
              return;
            }
            res.json({
              data:"注册成功",
              code:200,
              msg:"success",
              ret:true
            })
          })
        }
      })
    }
})

router.post('/login',(req,res) => {
  let{phone,pwd} = req.body;
  if(!phone || !validator.isMobilePhone(phone,'zh-CN')){
      res.json({
          data:"用户名不合法",
          code:400,
          msg:"用户名不合法",
          ret:false
      })
      return
  }else if(!pwd || validator.isEmpty(pwd.trim())){
      res.json({
          data:"密码不合法",
          code:400,
          msg:"密码不合法",
          ret:false
      })
      return
  }else{
      users.findOne({phone},(err,data) => {
          if(err){
              res.json({
                  data:err,
                  code:500,
                  msg:"false",
                  ret:false
              })
              return
          }
          if(data == null){ //用户未注册
              res.json({
                  data:"用户未注册",
                  code:400,
                  msg:"用户未注册",
                  ret:false
              })
              return
          }else if(md5(pwd) != data.pwd){ 
              res.json({
                  data:"密码错误",
                  code:400,
                  msg:"密码错误",
                  ret:false
              })
              return
          }else{ //登录成功
              req.session.user = data;
              res.json({
                  data:"登录成功",
                  code:200,
                  msg:"success",
                  ret:true
              })
          }
      })
  }
})

router.post('/changePwd',(req,res) => {
  let {pwd,newPwd} = req.body;
  if(!pwd || validator.isEmpty(pwd.trim())){
    res.json({
      data:"旧密码不合法",
      code:400,
      msg:"旧密码不合法",
      ret:false
    })
    return
  }else if(!newPwd || validator.isEmpty(newPwd.trim())){
    res.json({
      data:"新密码不合法",
      code:400,
      msg:"新密码不合法",
      ret:false
    })
    return
  }else{
    users.findOne({phone:req.session.user.phone},(err,data) => {
      pwd = md5(pwd);
      if(pwd != data.pwd){
        res.json({
          data:"旧密码输入错误",
          code:400,
          msg:"旧密码输入错误",
          ret:false
        })
        return
      }else{
        users.update({phone:req.session.user.phone},{$set:{pwd:md5(newPwd)}},(err,updateData) => {
          if(err) {
            res.json({
              data:err,
              code:500,
              msg:"修改失败",
              ret:false
            })
            return
          }
          res.json({
            data:"密码修改成功",
            code:200,
            msg:"success",
            ret:true
          })
        })
      }
    })
  }
})

router.get('/isLogin',(req,res) => {
  if(req.session.user){
    res.json({
      data:'已经登录',
      code:200,
      msg:"已经登录",
      ret:true
    })
    return
  }else{
    res.json({
      data:"还未登录",
      code:200,
      msg:"还未登录",
      ret:false
    })
  }
})

router.get('/logout',(req,res) => {
  if(req.session.user){
    req.session.user = null;
    res.json({
      data:"退出登录成功",
      code:200,
      msg:"success",
      ret:true 
    })
  }else{
    res.json({
      data:"请先登录",
      code:400,
      msg:"请先登录",
      ret:false
    })
  }
})

module.exports = router;
