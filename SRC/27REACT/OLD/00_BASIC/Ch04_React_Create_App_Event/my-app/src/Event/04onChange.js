function handleChange(event) {
    console.log('value changed! event Key : ',event);
 
   }
  
  function MyComponent() {
    return (
      <input type="text" onChange={handleChange} />
    );
  }
  
  export default{
    MyComponent,
   
    }
    