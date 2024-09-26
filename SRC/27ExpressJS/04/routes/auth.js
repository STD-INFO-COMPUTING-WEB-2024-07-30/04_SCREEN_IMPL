const express = require('express');
const router = express.Router();


//ENDPOINT(GET /login ) 로그인 페이지 이동
router.get("/login",async (req,resp)=>{
    console.log("GET /login..")
    resp.json("GET /login...")
})
//ENDPOINT(GET /login ) 로그인 처리
router.post("/login",async (req,resp)=>{
    console.log("POST /login..")
    resp.json("POST /login...")
})
//ENDPOINT(GET /logout ) 로그아웃처리
router.post("/logout",async (req,resp)=>{
    console.log("POST /logout..")
    resp.json("POST /logout...")
})

module.exports = router;