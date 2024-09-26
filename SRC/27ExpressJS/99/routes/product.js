const express = require('express');
const path = require('path');

//-------------------------
//iamge->base64로 변경하기
//-------------------------
const mime = require('mime-types');
const fs = require('fs');

//-------------------------
//처리 모듈가져오기
//-------------------------
const outerData = require('../dataset/outer.json'); // outerData Dataset
const shirtData = require('../dataset/shirt.json'); // shirtData Dataset
const shoesData = require('../dataset/shoes.json'); // shoesData Dataset

//-------------------------
//처리 모듈가져오기
//-------------------------
//이미지 파일 -> BASE64 ENCODING
const {toBase64ThumbnailImage,toBase64Image} =require('../utils/imageToBase64')
//유효성 체크 유틸
const {userValidation}  = require('../utils/validation')


const router = express.Router();
//(ENDPOINT : /home/list/:categoryId) 상품카테고리 상세 목록
router.get("/list/:categoryId",async(req,resp)=>{
    console.log("get /product/list/:categoryId")
    const categoryId = req.params.categoryId;
    console.log(categoryId)
    //DB로부터 내용가져오기(DB대신 JSON 으로 처리)
    let updatedData = null;
    if(categoryId==="1000"){
        console.log('outer..')
        updatedData = await toBase64ThumbnailImage(fs,mime,path,outerData);
        resp.json(updatedData)
    }
    else if(categoryId==="2000"){
        console.log('shirt..')
        updatedData = await toBase64ThumbnailImage(fs,mime,path,shirtData);
        console.log('updatedData',updatedData)
        resp.json(updatedData)
    }
    else if (categoryId === "3000") {
        console.log('shoes..');
        updatedData = await toBase64ThumbnailImage(fs,mime,path,shoesData);
        resp.json(updatedData)
    } else {
        resp.status(404).json({ error: "Category not found" });
    }

})
//(ENDPOINT : /home/read/:categoryId/:detailId) 상품카테고리 상세 읽기
router.get("/read/:categoryId/:detailId",async(req,resp)=>{
    console.log("get /product/read/:categoryId/:detailId")

    const {categoryId,detailId} = req.params;
    console.log("categoryId",categoryId,"detailId",detailId)
    //DB로부터 내용가져오기(DB대신 JSON 으로 처리)
    let updatedData = null;
    if(categoryId==="1000"){
        console.log('outer..')
        const selectedItem = outerData.filter((item)=>{return item.detailId==detailId})
        updatedData = await toBase64Image(fs,mime,path,selectedItem);
        resp.json(updatedData)
    }
    else if(categoryId==="2000"){
        console.log('shirt..')
        const selectedItem = shirtData.filter((item)=>{return item.detailId==detailId})
        updatedData = await toBase64Image(fs,mime,path,selectedItem);
        console.log('updatedData',updatedData)
        resp.json(updatedData)
    }
    else if (categoryId === "3000") {
        console.log('shoes..');
        const selectedItem = shoesData.filter((item)=>{return item.detailId==detailId})
        updatedData = await toBase64Image(fs,mime,path,selectedItem);
        resp.json(updatedData)
    } else {
        resp.status(404).json({ error: "Category not found" });
    }
})


module.exports = router;