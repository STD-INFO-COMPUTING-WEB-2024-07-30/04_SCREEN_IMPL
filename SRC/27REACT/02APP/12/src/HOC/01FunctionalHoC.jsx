import React from 'react';

function withClassName(WrappedComponent, className) {
  return function(props) {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  }
}

function MyComponent(props) {
  return <div>My Component</div>;
}

const ComponentWithClassName = withClassName(MyComponent, 'my-class');

export default ComponentWithClassName;

// 위 예제 코드에서 withClassName은 HOC입니다. 이 HOC는 렌더링할 
// 컴포넌트와 클래스 이름을 인자로 받아서, 새로운 컴포넌트를 반환합니다.
//  이 새로운 컴포넌트는 원래 컴포넌트를 렌더링하기 전에 지정된 클래스 
//  이름으로 감싸집니다.

// 위 코드에서 MyComponent는 기본 컴포넌트이며, withClassName을 
// 사용하여 새로운 컴포넌트 ComponentWithClassName을 생성합니다. 이 
// 새로운 컴포넌트는 MyComponent를 렌더링하기 전에 지정된 클래스 이름으로 
// 감싸지므로, MyComponent에 적용된 스타일과는 다른 스타일이 적용됩니다.

// 함수형 HOC를 사용하면 컴포넌트를 더 간결하고 재사용 가능하게 만들 수
//  있습니다. 위의 예시 코드에서 withClassName HOC를 다른 컴포넌트에도 
//  사용할 수 있습니다.
