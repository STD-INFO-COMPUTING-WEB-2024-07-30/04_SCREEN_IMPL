import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/"       element={<Home />}    />
            <Route path="/about"  element={<About />}   />
          </Routes>
      </Router>
      <div className="linkTest">
      </div>
    </div>
  );
}
export default App;

//exact란
//exact는 Route 컴포넌트에서 path 속성에 지정된 URL 경로와 정확히
//일치하는 경우에만 해당 라우트를 활성화하기 위한 속성
//[오류]
//v5 Switch 를 찾을수 없다는 오류가 뜨면 
//node_modules삭제이후 진행