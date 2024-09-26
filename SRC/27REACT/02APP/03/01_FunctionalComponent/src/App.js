import logo from './logo.svg';
import './App.css';

import Comp from './Component/Functional'

function App() {
  return (
    <div className="App">
      <Comp.MyComponent1  title='Test1' content='Test1' />
      <Comp.MyComponent2  title='Test2' content='Test2' />
      <Comp.MyComponent3  title='Test3' content='Test3' />
      <Comp.MyComponent4  title='Test4' content='Test4' />
    </div>
  );
}
export default App;
