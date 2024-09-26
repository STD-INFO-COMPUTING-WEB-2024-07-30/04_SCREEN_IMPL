import logo from './logo.svg';
import './App.css';

//01
import ParentComponent1 from "./Compnent/01Parent";
import ChildComponent1 from "./Compnent/01Son";
//02
import ParentComponent2 from "./Compnent/02Parent";
//03
import AppProvider  from "./Compnent/03AppProvider";
import ChildComponent0301 from "./Compnent/03Component1";
import ChildComponent0302 from "./Compnent/03Component2";


function App() {
  return (
    <div className="App">
      {/* 부모 -> 자식 props 전달 */}
      <ParentComponent1 />

      <hr />
      {/* 자식 -> 부모 onData 함수사용 전달 */}
      <ParentComponent2 />
      <hr />
      {/* 컴포넌트간 공유자원은 ContextAPI로 공유 */}

          <AppProvider>
            <ChildComponent0301 />
            <ChildComponent0302 />

          </AppProvider>

      <hr />
     
    </div>
  );
}

export default App;
