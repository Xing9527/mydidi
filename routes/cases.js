var express = require('express');
var router = express.Router();
var cases = require('../database/model/cases');

router.post('/add',(req,res) => {
    let{title,content,adress,img} = req.body;
    cases.create({title,content,adress,img},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"数据添加失败",
                ret:false
            })
            return
        }
        res.json({
            data:"success",
            code:200,
            msg:"success",
            ret:true
        })
    })
}),
router.get('/get',(req,res) => {
    var params = {};
    let {id} = req.query;
    if(id){
        params = {_id:id}
    }else{
        params = {}
    }
    cases.find(params,(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"查询工程失败",
                ret:false
            })
            return;
        }
        res.json({
            data:data,
            code:200,
            msg:"success",
            ret:true
        })
    })
});
router.post('/del',(req,res) => {
    let{id} = req.body;
    cases.remove({_id:id},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"删除数据失败",
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

router.post('/update',(req,res) => {
    let{id,title,content,adress,img} = req.body;
    cases.update({id},{$set:{title,content,adress,img,updateTime:new Date()}},(err,data) => {
        if(err){
            res.json({
                data:err,
                code:500,
                msg:"修改数据失败",
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
})

module.exports = router;
