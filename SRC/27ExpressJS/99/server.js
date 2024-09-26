//-------------------------
// 사전 설치 모듈 
//-------------------------
//설치
//npm install node
//npm install express
//npm install cors
//npm install axios
//npm install route

//실행
//node index.js

//-------------------------
//서버관련 설정
//-------------------------
const cors = require('cors');  // cors 패키지 불러오기
const express = require('express')
const app = express();
const port = 3001;

//-------------------------
//SERVER 설정 
//-------------------------
// CORS 허용(Client 시 접속시 해당 domain 허용처리)
app.use(cors());  

// JSON 요청 처리 미들웨어 추가
app.use(express.json());

// 정적파일 전달
const path = require('path'); // path 모듈 불러오기
app.use(express.static(path.join(__dirname, 'public')));    // 정적 파일을 제공하는 미들웨어 (public 폴더 아래의 파일을 제공)

//서버 START
app.listen(port,()=>{
    console.log(`SERVER is RUNNING ON http://localhost:${port}`)
})

// ENDPOINT 라우터 연결
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

app.use("/",homeRoutes);                    // 상품 관련 라우터
app.use("/product",productRoutes);              // 상품 관련 라우터
app.use("/",authRoutes);                        // 인증 관련 라우터


