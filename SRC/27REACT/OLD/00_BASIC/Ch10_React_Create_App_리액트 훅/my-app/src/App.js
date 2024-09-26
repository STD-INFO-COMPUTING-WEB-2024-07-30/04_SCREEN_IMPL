import logo from './logo.svg';
import './App.css';

import UseStateExam from './Hooks/01useStateExam';
import UseEffectExam from './Hooks/02useEffectExam';
import UseContextExam from './Hooks/03useContextExam';
import UseReducerExam from './Hooks/04useReducerExam';
import UseCallbackExam from './Hooks/05useCallbackExam';
import UseMemoExam from './Hooks/06useMemoExam';
import UseLocalStorageExam from './Hooks/07useLocalStorage ';


function App() {
  return (
    <div className="App">
      
      {/* 01 */}
      <UseStateExam />
      <hr />
      {/* 02 */}
      <UseEffectExam />
      <hr />
      {/* 03 */}
      <UseContextExam />
      <hr />
      {/* 04 */}
      <UseReducerExam />
      <hr />
      {/* 05 */}
      <UseCallbackExam />
      <hr />
      {/* 06 */}
      <UseMemoExam items={[5,2,6,7,11,1,15]} />
      <hr />
      {/* 07 */}
      <UseLocalStorageExam />

    </div>
  );
}

export default App;
