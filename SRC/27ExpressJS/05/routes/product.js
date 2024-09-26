const express = require('express');
const router = express.Router();


//PRODUCT DATASET 가져오기(DB연결시 삭제함)
const outerData = require('../dataset/product/outer.json'); // outerData Dataset
const shirtData = require('../dataset/product/shirt.json'); // shirtData Dataset
const shoesData = require('../dataset/product/shoes.json'); // shoesData Dataset

//-------------------------
//이미지->BASE64 ENCODING 모듈가져오기
//-------------------------
//이미지 파일 -> BASE64 ENCODING
const {toBase64ThumbnailImage,toBase64Image} =require('../utils/imageToBase64')

//-------------------------
//필요 외부모듈 가져오기
//-------------------------
const mime = require('mime-types'); //MIME TYPE
const fs = require('fs');           //파일IO
const path = require('path');       




//ENDPOINT(GET /product/list/:categoryId ) 상품리스트 확인
router.get("/list/:categoryId",async (req,resp)=>{
    const categoryId = req.params.categoryId;
    console.log("GET /product/list/:categoryId..",categoryId)
    //
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
    //
    //resp.json(`GET /product/list/:categoryId..${categoryId}`)
})
//(ENDPOINT : /product/read/:categoryId/:detailId) 상품카테고리 상세 읽기
router.get("/read/:categoryId/:detailId",async(req,resp)=>{
    const {categoryId,detailId} = req.params;
    console.log("get /product/read/:categoryId/:detailId..",categoryId,detailId);
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
    //resp.json(`GET /product/read/:categoryId/:detailId..${categoryId}...${detailId}`)
});


module.exports = router;