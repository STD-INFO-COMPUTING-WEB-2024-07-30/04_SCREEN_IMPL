import logo from './logo.svg';
import './App.css';

import FunctionalHocTest from './HOC/01FunctionalHoC';
import ClassHocTest from './HOC/02ClassHoc';


function App() {
  return (
    <div className="App">
        <FunctionalHocTest  />
        <hr/>
        <ClassHocTest />
    </div>
 
  );
}

export default App;
