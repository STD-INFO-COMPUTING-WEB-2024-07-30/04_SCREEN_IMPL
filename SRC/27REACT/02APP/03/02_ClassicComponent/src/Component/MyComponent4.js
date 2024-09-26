import React, { Component } from 'react';


//4. 클래스형 컴포넌트의 lifecycle 메서드 구현
class MyComponent4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component is mounted');
    // 컴포넌트가 최초로 화면에 마운트된 후 실행될 코드를 작성합니다
    // 최초로 화면에 마운트될 때 한 번만 호출
  }

  componentDidUpdate() {
    console.log('Component is updated');
    //컴포넌트가 화면에서 제거되고 다시 마운트될 때마다 실행
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a React class component.</p>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    );
  }
}
export default MyComponent4;
