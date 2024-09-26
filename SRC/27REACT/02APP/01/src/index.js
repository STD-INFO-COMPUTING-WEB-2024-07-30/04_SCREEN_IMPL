import React from 'react';  // React 라이브러리를 임포트합니다.
import ReactDOM from 'react-dom/client';  // ReactDOM 클라이언트를 임포트합니다.
import './index.css';  // 전체 애플리케이션에 적용할 CSS 파일을 임포트합니다.
import App from './App';  // 최상위 React 컴포넌트인 App을 임포트합니다.
import reportWebVitals from './reportWebVitals';  // 웹 성능 측정 도구를 임포트합니다.

// 'root'라는 id를 가진 DOM 요소를 찾아서 React 루트를 만듭니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode는 자바스크립트의 엄격 모드를 활성화하여 잠재적인 문제를 감지합니다.
root.render(
  <React.StrictMode>
    <App />  // App 컴포넌트를 렌더링합니다.
  </React.StrictMode>
);

// 웹 성능을 측정하기 위해 reportWebVitals 함수를 호출합니다.
reportWebVitals(); 