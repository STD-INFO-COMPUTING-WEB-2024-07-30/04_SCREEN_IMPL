import logo from './logo.svg';
import './App.css';
import BasicConditionRndTest from './ConditionRnd/01Basic'
import BasicConditionRndTest2 from './ConditionRnd/02Basic'


function App() {
  return (
    <>
    <div className="App">
      {/* 기본 테스트 */}
      <BasicConditionRndTest.MyComponent1 isLoggedIn={false} />
      <hr />
      <BasicConditionRndTest.MyComponent2 isLoggedIn={true} />
      <hr />
      <BasicConditionRndTest.MyComponent3 items={[{id:'hong',name:'홍길동'},{id :'jung',name:'정경채'}]} />
      <hr />
      <BasicConditionRndTest.MyComponent4 isLoggedIn={true} />
    </div>
    <div>
      <hr />
      <BasicConditionRndTest2.MyComponent1 
        isLoading={false}
        items={ [ {id:'hong',name:'honggildong'} ]} 
      />

      <hr />
      <BasicConditionRndTest2.MyComponent2
        user={ {role:'admin',name:'nana'} }
      />
      <hr />
      <BasicConditionRndTest2.MyComponent3 
        items={[
          {isNew :false,name:'wow1'},
          {isNew :true,name:'wow2'},
          {isNew :true,name:'wow3'},
          {isNew :false,name:'wow4'},

        ]}
      />

    </div>
    </>
  );
}

export default App;
