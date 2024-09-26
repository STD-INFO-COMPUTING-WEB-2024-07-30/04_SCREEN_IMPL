import logo from './logo.svg';
import './App.css';
//외부 JSX 파일안의 변수만 받기
import {Element1} from './JSX/JSX_Basic'
import {Element2} from './JSX/JSX_Basic'
import {Element3} from './JSX/JSX_Basic'
import {Element4} from './JSX/JSX_Basic'
import {Element5} from './JSX/JSX_Basic'
//외부 JSX 파일안의 모든 export 받기
import JSXTest from './JSX/JSX_Basic'

//JSX 이벤트 처리
import JSEvent from  './JSX/JSX_Event'

function App() {
  return (
    <div className="App">

        {/* 1 */}
        <div>
            {Element1}
            {Element2}
            {Element3}
            {Element4}
            {Element5}
        </div>
        <div>
          <JSXTest.GreetingEl name="JSXTESET" />
          <JSXTest.GreetingList names={['a','v','c']} />
        </div>
        <div>
            <JSEvent.MyComponent1 />
            <JSEvent.MyComponent2 />
            <JSEvent.MyComponent3 />

        </div>

    </div>
  );
}

export default App;
