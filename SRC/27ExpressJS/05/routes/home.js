const express = require('express');
const router = express.Router();

//
const categoryData = require('../dataset/product/category.json');


//ENDPOINT(GET / ) 메인페이지이동
router.get("/",async (req,resp)=>{
    console.log("GET /..")
    resp.json(categoryData)
})

module.exports = router;