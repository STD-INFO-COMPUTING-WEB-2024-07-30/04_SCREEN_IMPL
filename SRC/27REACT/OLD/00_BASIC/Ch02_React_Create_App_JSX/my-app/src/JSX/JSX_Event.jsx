
// 1 
function handleClick1() {
    console.log('handleClick1 Button clicked');
  }
  
function MyComponent1() {
    return (
      <button onClick={handleClick1}>
        Click me
      </button>
    );
  }
  

  //2
  function MyComponent2() {
    
    function handleClick2() {
      console.log('handleClick2 Button clicked');
    }
  
    return (
      <button onClick={handleClick2}>
        Click me
      </button>
    );
  }
  
  //3
  function handleKeyDown(event) {
    console.log(`Key pressed: ${event.key}`);
  }
  
  function MyComponent3() {
    return (
      <div onKeyDown={handleKeyDown} tabIndex={0}>
        Press a key
      </div>
    );
  }
  export default {
    MyComponent1,
    MyComponent2,
    MyComponent3
  };
