import React from 'react';


// 1 기본 JSX 요소 생성
export const Element1 = <h1>Hello, world!</h1>;

// 2 JSX를 사용한 컴포넌트 작성

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
  
export  const Element2 = <Greeting name="John" />;
  

  //3 JSX에서 조건문 사용하기

  function GreetingEl(props) {
    if (props.name) {
      return <h1>Hello, {props.name}!</h1>;
    } else {
      return <h1>Hello, Stranger!</h1>;
    }
  }
  
  export  const Element3 = <GreetingEl name="John" />;
  export  const Element4 = <GreetingEl />;


  //4 JSX에서 반복문 사용하기

  function GreetingList(props) {
    const names = props.names;
    const listItems = names.map((name) => <li>{name}</li>);
    return <ul>{listItems}</ul>;
  }
  
  export const names = ["John", "Jane", "Bob"];
  export  const Element5 = <GreetingList names={names} />;

  export default {
    GreetingEl,
    GreetingList
  };


  
  
