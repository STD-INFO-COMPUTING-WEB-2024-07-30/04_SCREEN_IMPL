# REACT 

|참고|
|-|
|[CRA(Create React App)](https://velog.io/@hoho3419/CRACreate-React-App%EB%9E%80)|

---
제목 1
---
> Create App 생성(npx create-react-app [폴더명])
```
npx create-react-app 01
```
![20240730205630](https://github.com/user-attachments/assets/2b5641a2-5257-41bd-afa9-7c9035514f4c)

> 생성되는 파일/폴더 확인<br>

|-|
|-|
|![20240730205856](https://github.com/user-attachments/assets/a67d931e-c3ab-4245-8cfe-89ff802efe49)|

```
01
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│
├─node_modules
│      많아서 생략...
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│
└─src
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        reportWebVitals.js
        setupTests.js
```
```
node_modules: 프로젝트의 모든 의존성 모듈들이 저장되는 폴더입니다. package.json 파일에 정의된 의존성들이 설치됩니다.
public: 정적 파일들이 위치하는 폴더입니다. 주로 HTML 파일과 파비콘 등이 포함됩니다.
    index.html: React 애플리케이션이 로드되는 기본 HTML 파일입니다.
src: 실제 소스 코드가 포함된 폴더입니다. 모든 React 컴포넌트와 스타일 파일들이 이곳에 위치합니다.
    index.js: ReactDOM을 사용하여 React 컴포넌트를 index.html의 root 엘리먼트에 렌더링하는 파일입니다.
    App.js: 기본 React 컴포넌트를 정의한 파일입니다.
    App.css: App 컴포넌트의 스타일이 정의된 파일입니다.
.gitignore: Git에서 무시할 파일 및 폴더를 정의한 파일입니다. 주로 node_modules와 같은 폴더가 포함됩니다.
package.json: 프로젝트의 의존성, 스크립트, 메타데이터 등이 정의된 파일입니다.
package-lock.json: 의존성 트리의 정확한 버전을 기록한 파일입니다. 프로젝트의 일관성을 유지하는 데 사용됩니다.
README.md: 프로젝트에 대한 설명과 사용 방법 등을 기술하는 파일입니다. GitHub와 같은 플랫폼에서 프로젝트의 소개 문서로 사용됩니다.
```

> npm start

|-|
|-|
|![20240730205856](https://github.com/user-attachments/assets/0287cd8d-da89-4eaf-a972-b6fa3f176f51)|
|![20240730214044](https://github.com/user-attachments/assets/89628c52-5555-4b2f-8aa4-13852acd95d8)|
```
1 npm start: 개발 서버를 시작하는 명령어입니다. 이 명령어를 실행하면 package.json 파일에 정의된 start 스크립트가 실행됩니다.
2 React Scripts: create-react-app 설정에서 제공하는 스크립트로, npm start 명령어를 통해 개발 서버를 설정하고 애플리케이션을 빌드합니다.
3 Webpack: 모듈 번들러인 Webpack이 index.js 파일을 시작점으로 삼아 애플리케이션의 의존성 트리를 구축하고, 이를 하나의 번들 파일로 묶어 개발 서버에 제공합니다.
4 Development Server: Webpack 개발 서버는 번들된 파일을 브라우저에 제공하고, 이를 통해 index.js 파일이 실행됩니다.
```


---
제목 2
---
> index.js
```
import React from 'react';  // React 라이브러리를 임포트합니다.
import ReactDOM from 'react-dom/client';  // ReactDOM 클라이언트를 임포트합니다.
import './index.css';  // 전체 애플리케이션에 적용할 CSS 파일을 임포트합니다.
import App from './App';  // 최상위 React 컴포넌트인 App을 임포트합니다.
import reportWebVitals from './reportWebVitals';  // 웹 성능 측정 도구를 임포트합니다.

// 'root'라는 id를 가진 DOM 요소를 찾아서 React 루트를 만듭니다.
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode> // React.StrictMode는 자바스크립트의 StrictMode 모드를 활성화하여 잠재적인 문제를 감지합니다.
    <App />  // App 컴포넌트를 렌더링합니다.
  </React.StrictMode>
);
// 웹 성능을 측정하기 위해 reportWebVitals 함수를 호출합니다.
reportWebVitals(); 
```

> App.js
```
import logo from './logo.svg';  // 로고 이미지를 임포트합니다.
import './App.css';  // 애플리케이션의 스타일을 정의한 CSS 파일을 임포트합니다.

function App() {
  return (
    <div className="App">  // 최상위 div 요소로, 클래스 이름이 "App"입니다.
      <header className="App-header">  // 헤더 섹션으로, 클래스 이름이 "App-header"입니다.
        <img src={logo} className="App-logo" alt="logo" />  // 로고 이미지를 화면에 표시합니다.
        <p>
          Edit <code>src/App.js</code> and save to reload.  // 안내 문구를 표시합니다.
        </p>
        <a
          className="App-link"  // 링크 요소로, 클래스 이름이 "App-link"입니다.
          href="https://reactjs.org"  // 클릭 시 리액트 공식 사이트로 이동합니다.
          target="_blank"  // 새 탭에서 링크를 엽니다.
          rel="noopener noreferrer"  // 보안 속성으로, 링크를 열 때 보안상의 위험을 줄입니다.
        >
          Learn React  // 링크 텍스트를 표시합니다.
        </a>
      </header>
    </div>
  );
}
export default App;  // App 컴포넌트를 내보냅니다.
```
> 
