//-----------------------------
// 서버 기본설정
//-----------------------------
const express = require('express')
const app = express();
const port = 3001;

//-----------------------------
// CORS 허용(Client 시 접속시 해당 domain 허용처리)
//-----------------------------
const cors = require('cors');  // cors 패키지 불러오기
app.use(cors());  

//-----------------------------
// 정적 파일 처리
//-----------------------------
const path = require('path'); // path 모듈 불러오기
app.use(express.static(path.join(__dirname, 'public')));    // 정적 파일을 제공하는 미들웨어 (public 폴더 아래의 파일을 제공)

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




