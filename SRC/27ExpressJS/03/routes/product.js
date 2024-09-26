const express = require('express');
const router = express.Router();


//ENDPOINT(GET /product/list/:categoryId ) 상품리스트 확인
router.get("/list/:categoryId",async (req,resp)=>{
    const categoryId = req.params.categoryId;
    console.log("GET /product/list/:categoryId..",categoryId)
    resp.json(`GET /product/list/:categoryId..${categoryId}`)
})
//(ENDPOINT : /product/read/:categoryId/:detailId) 상품카테고리 상세 읽기
router.get("/read/:categoryId/:detailId",async(req,resp)=>{
    const {categoryId,detailId} = req.params;
    console.log("get /product/read/:categoryId/:detailId..",categoryId,detailId);
    resp.json(`GET /product/read/:categoryId/:detailId..${categoryId}...${detailId}`)
});


module.exports = router;