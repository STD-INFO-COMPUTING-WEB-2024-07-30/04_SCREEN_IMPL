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

//ROUTES 모듈 연결
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

//ROUTES 모듈별 ENDPOINT 지정
app.use("/",homeRoutes);
app.use("/",authRoutes);
app.use("/product",productRoutes);
