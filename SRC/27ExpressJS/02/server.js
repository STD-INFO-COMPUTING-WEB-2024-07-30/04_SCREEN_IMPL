//-----------------------------
// 서버 기본설정
//-----------------------------
const express = require('express')
const app = express();
const port = 3001;

//서버 START
app.listen(port,()=>{
    console.log(`SERVER is RUNNING ON http://localhost:${port}`)
})
//-----------------------------
// 요청 응답 객체
//-----------------------------
app.use(express.json());    // JSON 요청 처리 미들웨어 추가
//ENDPOINT(GET / ) 메인페이지이동
app.get("/",async (req,resp)=>{
    console.log("GET /..")
    resp.json("GET /...")
})
//ENDPOINT(GET /login ) 로그인 페이지 이동
app.get("/login",async (req,resp)=>{
    console.log("GET /login..")
    resp.json("GET /login...")
})
//ENDPOINT(GET /login ) 로그인 처리
app.post("/login",async (req,resp)=>{
    console.log("POST /login..")
    resp.json("POST /login...")
})
//ENDPOINT(GET /logout ) 로그아웃처리
app.post("/logout",async (req,resp)=>{
    console.log("POST /logout..")
    resp.json("POST /logout...")
})

//ENDPOINT(GET /product/list/:categoryId ) 상품리스트 확인
app.get("/product/list/:categoryId",async (req,resp)=>{
    const categoryId = req.params.categoryId;
    console.log("GET /product/list/:categoryId..",categoryId)
    resp.json(`GET /product/list/:categoryId..${categoryId}`)
})
//(ENDPOINT : /product/read/:categoryId/:detailId) 상품카테고리 상세 읽기
app.get("/product/read/:categoryId/:detailId",async(req,resp)=>{
    const {categoryId,detailId} = req.params;
    console.log("get /product/read/:categoryId/:detailId..",categoryId,detailId);
    resp.json(`GET /product/read/:categoryId/:detailId..${categoryId}...${detailId}`)
});