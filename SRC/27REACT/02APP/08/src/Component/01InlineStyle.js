//Inline 스타일링
function MyComponent1() {
    const myStyle = {
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '24px'
    };
    return (
      <div style={myStyle}>Hello, world!</div>
    );
  }
  
export default MyComponent1