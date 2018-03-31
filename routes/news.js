var express = require('express');
var router = express.Router();
var news = require('../database/model/news');
router.post('/add',(req,res) => {
    let {contentText,content,title,img,author,id} = req.body;
    news.create({id,title,author,img,content,contentText},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据添加失败",
                ret:false
            });
            return;
        }
        res.json({
            data:"success",
            code:200,
            msg:"success",
            ret:true
        })
    })
});

router.get('/get',(req,res) => {
    let{id,pn=1} = req.query;
    var params = {};
    if(!id){//不传ID的情况
        params = {};
    }else{
        params = {_id:id};
    }
    news.find(params).sort({_id:-1}).exec((err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"获取数据失败",
                ret:false
            });
            return;
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        });
    })
});

router.post('/update',(req,res) => {
    let{id,title,author,img,content,contentText} = req.body;
    news.update({id},{$set:{title,author,img,content,contentText,updateTime:new Date()}},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据修改失败",
                ret:false
            })
            return;
        }
        if(!data.n){
            res.json({
                data:"无效的ID",
                code:400,
                msg:"无效的ID",
                ret:false
            })
            return;
        }else{
            res.json({
                data:"success",
                code:200,
                msg:"success",
                ret:true
            })
        }
    })
});

router.post('/del',(req,res) => {
    let {_id} = req.body;
    news.remove({_id},(err,data) => {
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
});

module.exports = router;
