//1부모 -> 자식 으로 전달 
//props를 사용한다

import ChildComponent from './01Son';

function ParentComponent() {
    const data = { name: 'John', age: 30 };
    return (
      <ChildComponent data={data} />
    );
  }
  
  export default ParentComponent;
  