const express = require('express');
const router = express.Router();


//ENDPOINT(GET / ) 메인페이지이동
router.get("/",async (req,resp)=>{
    console.log("GET /..")
    resp.json("GET /...")
})

module.exports = router;