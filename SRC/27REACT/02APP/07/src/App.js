import logo from './logo.svg';
import './App.css';
import ListKeyTest from './ListKeyMap/01ListKeyMapTest'
import NAV from './ListKeyMap/02Nav'
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Durian' },
];
function App() {
  return (
    <div className="App">  
      <ListKeyTest items={items} /> 
      <hr />
      <NAV />
    </div>  
  );
}

export default App;
