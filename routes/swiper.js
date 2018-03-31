var express = require('express');
var router = express.Router();
var swiper = require('../database/model/swiper')

router.post('/add',(req,res) => {
    let{img} = req.body;
    swiper.create({img},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"图片添加失败",
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

router.get('/get', (req,res) => {
    var params = {};
    let {id} = req.query;
    if(id){
        params = {_id:id}
    }else{
        params = {}
    }
    swiper.find(params,(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"图片查找失败",
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
    let {id,img} =req.body;
    swiper.update({_id:id},{$set:{img}},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据修改失败",
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"无效的ID",
                ret:true
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

router.post('/del',(req,res) => {
    let{id} = req.body;
    swiper.remove({_id:id},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据删除失败",
                ret:false
            })
            return
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"无效的ID",
                ret:true
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