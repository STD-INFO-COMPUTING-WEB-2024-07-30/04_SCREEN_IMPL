import React, { Component } from "react";

const withLoading = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: false };
    }

    setLoading = (isLoading) => {
      this.setState({ isLoading });
    };

    render() {
      const { isLoading } = this.state;

      return (
        <>
          {isLoading && <div>Loading...</div>}
          <WrappedComponent setLoading={this.setLoading} {...this.props} />
        </>
      );
    }
  };
};

class MyComponent extends Component {
  render() {
    const { setLoading } = this.props;

    return (
      <div>
        <button onClick={() => setLoading(true)}>Show Loading</button>
        <p>This is my component</p>
      </div>
    );
  }
}

const MyComponentWithLoading = withLoading(MyComponent);

export default MyComponentWithLoading;



// 위 코드에서 withLoading이라는 HOC를 만듭니다. 
// 이 HOC는 WrappedComponent라는 매개변수를 받아서 
// 새로운 클래스형 컴포넌트를 반환합니다.


// 반환된 클래스형 컴포넌트는 isLoading이라는 상태를 
// 갖고, setLoading이라는 메서드를 가지고 있습니다. setLoading
//  메서드를 사용하여 isLoading 상태를 변경할 수 있습니다.

// render 메서드에서는 isLoading 상태에 따라 로딩 표시를 표시하고,
//  WrappedComponent를 렌더링합니다. setLoading 메서드와 나머지 속성들은
//   WrappedComponent에게 전달됩니다.

// MyComponent는 위 예제에서 WrappedComponent로 사용됩니다.
//  MyComponentWithLoading은 withLoading을 사용하여 MyComponent를
//   래핑한 새로운 클래스형 컴포넌트입니다.

// 이 HOC는 컴포넌트가 렌더링되기 전과 후에 로딩 표시를 표시할 수
//  있도록 해주는 간단한 예제입니다.

