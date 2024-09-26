import logo from './logo.svg';
import './App.css';
import onClickTest from './Event/01onClick'
import onMouseTest from './Event/02onMouse'
import onKeyTest from './Event/03onKey'
import onChangeTest from './Event/04onChange'
import onFormTest from './Event/05formEvent'
import onScrollTest from './Event/06onScroll'


function App() {
  return (
    <div className="App">
      {/* 01 Onclick */}
      <onClickTest.MyComponent />
      <hr />
      <onMouseTest.MyComponent1 />
      <onMouseTest.MyComponent2 />
      <hr />
      <onKeyTest.MyComponent1 />
      <onKeyTest.MyComponent2 />
      <onKeyTest.MyComponent3 />
      <hr />
      <onChangeTest.MyComponent />
      <hr />
      <onFormTest.MyComponent />
      <hr />
      <onScrollTest.MyComponent />
    </div>
  );
}

export default App;
