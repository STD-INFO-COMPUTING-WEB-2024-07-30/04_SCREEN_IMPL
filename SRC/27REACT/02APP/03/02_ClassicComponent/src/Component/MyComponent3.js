import React, { Component } from 'react';

//3. 클래스형 컴포넌트의 state 정의
class MyComponent3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a React class component.</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
export default MyComponent3;

