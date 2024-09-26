const express = require('express');
const router = express.Router();


const categoryData = require('../dataset/category.json'); // categoryDat

//(ENDPOINT : /home)상품카테고리 일반
router.get("/home",(req,resp)=>{
    //DB로부터 내용가져오기(json으로 대체하기)
    resp.json(categoryData);
})

module.exports = router;