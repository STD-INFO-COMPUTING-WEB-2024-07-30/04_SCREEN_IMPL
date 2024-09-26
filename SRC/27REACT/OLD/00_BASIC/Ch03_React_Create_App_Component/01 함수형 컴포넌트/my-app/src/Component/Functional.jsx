//1 기본 함수형 컴포넌트

import React from 'react';

function MyComponent1(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}



//2 ES6 화살표 함수를 이용한 함수형 컴포넌트
const MyComponent2 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

//3 ES6 화살표 함수와 구조 분해 할당을 이용한 함수형 컴포넌트

const MyComponent3 = ({ title, content }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
 
//4 React Hooks를 이용한 함수형 컴포넌트
//import React, { useState } from 'react';

const MyComponent4 = ({ title, content }) => {
    
  const [count, setCount] = React.useState(0);   
  const [status, setStatus] = React.useState(0);   

  // useState는 React Hooks 중 하나로, 함수형 컴포넌트에서 state를 관리하기 위한 방법 중 하나입니다.
  //count라는 이름의 state를 추가하고, 초기값으로 0을 전달

  //setState는 두 개의 값, 즉 현재 state 값과 해당 state를 업데이트하는 함수를 
  //반환합니다. 위 코드에서는 count라는 상태를 업데이트하는 setCount 함수를 
  //구조분해 할당으로 받아와서 사용하고 있습니다.

  const handleClick = () => {
    setCount(count + 1);
    setStatus(status + 2);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        Count: {count} Status : {status}
      </button>
    </div>
  );
}



export default {
    MyComponent1,
    MyComponent2,
    MyComponent3,
    MyComponent4

};


//[참고]
// const [count, setCount] = useState(0); 는 React Hook인 useState() 함수를 사용하여, count라는 이름의 state 변수를 선언하고, 이를 업데이트하기 위한 setCount라는 함수를 선언하는 코드입니다.

// useState() 함수는 배열을 반환하는데, 배열의 첫번째 요소는 state 변수의 초기값이고, 두번째 요소는 state 변수를 업데이트하는 함수입니다.

// 따라서 const [count, setCount] = useState(0); 는 count 변수의 초기값을 0으로 설정하고, setCount 함수를 통해 count 변수의 값을 업데이트할 수 있도록 선언한 것입니다.

// setCount 함수는 count 변수의 값을 변경하면서 React 컴포넌트를 다시 렌더링합니다. 이것이 React의 핵심 동작 원리 중 하나인데, state 값이 변경되면 해당 state를 사용하는 컴포넌트를 다시 렌더링하여 변경된 값을 화면에 반영합니다.
