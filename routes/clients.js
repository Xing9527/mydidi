var express = require('express');
var router = express.Router();
var clients = require('../database/model/clients')

router.post('/add',(req,res) => {
    let {name,phone,idNum} = req.body;
    clients.create({name,phone,idNum},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"添加数据失败",
                ret:false
            })
            return
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.get('/get',(req,res) => {
    var params = {};
    if(req.query.id){
        params = {_id:req.query.id}
    }else{
        params = {}
    }
    clients.find(params , (err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"查找数据失败",
                ret:false
            })
            return
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
})

router.post('/update',(req,res) => {
    let {id,name,phone,idNum} = req.body;
    clients.update({id},{$set:{name,phone,idNum,updateTime:new Date()}},(err,data) => {
        if(err) {
            res.json({
                data:err,
                code:500,
                msg:"修改数据失败",
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"false",
                ret:false
            })
            return
        }else{
            res.json({
                data:data,
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
})

router.post('/del',(req,res) => {
    let {id} = req.body;
    clients.remove({_id:id},(err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"删除数据失败",
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"false",
                ret:false
            })
            return
        }else{
            res.json({
                data:"success",
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
})

module.exports = router;
