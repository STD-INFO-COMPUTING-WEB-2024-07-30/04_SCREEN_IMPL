import logo from './logo.svg';
import './App.css';
import Parent from './Component/Parent';

function App() {
  const profile = {
    name: '홍길동',
    age: 55,
  };

  return (
    <div className="App">
      <Parent profile={profile} />
    </div>
  );
}

export default App;
