const express = require('express');
const router = express.Router();

//USER AUTHENTICATION DATASET
const userData = require('../dataset/user.json')
const sessionData = require('../dataset/session.json')

//로그인 처리 서비스
const {login,logout,findid,findpw,} =require('../service/authenticationService')


//
//(ENDPOINT : /login) 로그인 요청 
router.post('/login', async (req,resp)=>{

    const {userId,password} = req.body;
    console.log("post /login...userId",userId,"password",password)
    
    //유효성 체크
    
    //모듈함수 사용
    let sessionId = await login(userId,password,userData,sessionData);
    console.log("app.post  /login ..",sessionId)

    resp.json(sessionId)

})

//
router.get('/logout',async (req,resp)=>{
    console.log("GET /logout...")
    //sessionData에서 session 찾아서 제거하는 작업  
})

//JOIN
router.get('/join',async (req,resp)=>{
    console.log("GET /join...")
})

module.exports = router;