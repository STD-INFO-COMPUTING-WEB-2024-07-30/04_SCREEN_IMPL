import React, { useState } from 'react';

//ParentComponent는 withChildComponents 함수로 감싸진 컴포넌트가 됩니다.
const withChildComponents = (ParentComponent) =>  //함수의 인자로 ParentComponent를 받습니다.                                                  
{
  return (props) => {
    console.log("withChildComponents'sprops : " ,props);
    // 
    const [childComponents, setChildComponents] = useState([]); //childComponents 현재 렌더링 중인 자식 컴포넌트들의 배열

    //새로운 자식 컴포넌트를 추가하는 역할
    //이 함수는 인자로 추가할 자식 컴포넌트와 그 컴포넌트에 전달할 프롭스를 받습니다.
    const addChildComponent = (ChildComponent, childProps = {}) => {
      //newChildComponent라는 변수에는 ChildComponent와 childProps를 이용하여 새로운 자식 컴포넌트를 만들고, 
      const newChildComponent = (
        <ChildComponent key={childComponents.length} {...childProps} />
      );
      //setChildComponents 함수를 사용하여 childComponents 배열에 추가합니다.
      setChildComponents([...childComponents, newChildComponent]);
    };




    //마지막으로, ParentComponent에는 childComponents와 addChildComponent 프롭스를 전달하여, 
    //자식 컴포넌트 배열과 새로운 자식 컴포넌트를 추가하는 함수를 사용할 수 있도록 합니다.
    return (
      <ParentComponent
        {...props}         // ParentComponent에 전달된 모든 프롭스를 전달하는 구문
        childComponents={childComponents} //childComponents와 addChildComponent는 withChildComponents 함수에서 만들어진 프롭스이며, ParentComponent에게 해당 프롭스들도 전달
        addChildComponent={addChildComponent}
      />
    );

  };
};

const Parent = ({ childComponents, addChildComponent, profile }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => addChildComponent(Child,profile)}>Add Child Component</button>
      {childComponents}
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Hello World!</p>
    </div>
  );
};

export default withChildComponents(Parent);