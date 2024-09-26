function handleClick(event) {
    console.log('clicked! event obj : ',event);
    
  }
  function MyComponent() {
    return (
      <button onClick={handleClick}>Click me</button>
    );
  }

  export default{
    MyComponent
  }
  