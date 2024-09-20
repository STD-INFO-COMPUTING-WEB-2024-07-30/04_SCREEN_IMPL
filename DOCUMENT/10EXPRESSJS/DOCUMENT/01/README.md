# EXPRESSJS

EXPRESSJS란
---
```
Express.js는 Node.js를 위한 웹 애플리케이션 프레임워크로, 서버 및 웹 애플리케이션을 구축하는 데 사용됩니다.
Express.js는 빠르고, 최소한의 구조를 제공하며,
Node.js 환경에서 HTTP 요청을 처리하는 데 필요한 기본적인 도구들을 제공하여 웹 애플리케이션 개발을 쉽게 만들어 줍니다.
```

EXPRESSJS 특징
---
```
간결하고 유연한 API:
Express.js는 미니멀리즘을 추구하는 프레임워크로, 개발자가 서버 로직을 간단하게 작성할 수 있는 API를 제공합니다.
URL 라우팅, 미들웨어 처리, 요청 및 응답의 관리 등 기본적인 기능을 빠르고 직관적으로 사용할 수 있습니다.

미들웨어 아키텍처:
Express.js는 미들웨어를 통해 HTTP 요청 및 응답 처리를 확장합니다. 미들웨어는 요청과 응답 사이에 실행되는 함수로, 인증, 로그 기록, 데이터 파싱 등의 작업을 수행할 수 있습니다.

라우팅 시스템:
Express.js는 URL에 따라 요청을 처리하는 강력한 라우팅 시스템을 제공합니다. 다양한 HTTP 메소드(GET, POST, PUT, DELETE 등)와 URL 경로를 기반으로 요청을 다룰 수 있습니다.

템플릿 엔진 통합:
Express.js는 여러 템플릿 엔진(e.g. Pug, EJS, Handlebars)과 쉽게 통합하여 서버 측에서 동적으로 HTML을 렌더링할 수 있습니다.

빠르고 가벼움:
Express.js는 불필요한 기능이 포함되지 않은 가벼운 프레임워크로, 필요에 따라 추가 기능을 모듈화하여 사용할 수 있습니다.

Node.js의 확장:
Express.js는 Node.js의 기능을 확장하여, 비동기 이벤트 기반의 아키텍처를 활용하면서도 서버를 쉽게 구축할 수 있습니다.
```


EXPRESSJS 기본구성 요소
---
> 라우팅 (Routing):
```
클라이언트 요청에 대한 응답을 URL 경로 및 HTTP 메서드(GET, POST, PUT, DELETE 등)를 기준으로 정의합니다.
app.get('/user', (req, res) => {
  res.send('User Page');
});
```
> 미들웨어 (Middleware):
```
미들웨어는 요청-응답 주기 동안 실행되는 함수로, 요청 처리 중간에 필요한 다양한 작업을 수행합니다. 예를 들어, 로그를 남기거나 요청 데이터를 처리하는 역할을 할 수 있습니다.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // 다음 미들웨어나 라우터로 이동
});
```
> 요청과 응답 객체 (Request, Response Objects):
```
req(요청 객체): 클라이언트로부터의 요청 정보를 포함.
res(응답 객체): 서버에서 클라이언트로 보낼 응답을 구성하는 객체.
app.get('/welcome', (req, res) => {
  res.send('Welcome to Express');
});
```
> 정적 파일 서비스 (Static Files):
```
Express.js는 정적 파일(HTML, CSS, JavaScript, 이미지 등)을 쉽게 제공할 수 있는 기능을 내장하고 있습니다.
app.use(express.static('public'));
```

