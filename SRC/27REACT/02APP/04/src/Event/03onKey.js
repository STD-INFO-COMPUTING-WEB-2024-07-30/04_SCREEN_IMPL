// keydown
function handleKeyDown(event) {
  console.log("key down!", event.keyCode);
}

function MyComponent1() {
  return <input type="text" onKeyDown={handleKeyDown} />;
}

//keyup
function handleKeyUp(event) {
  console.log("key up! ", event.keyCode);
}

function MyComponent2() {
  return <input type="text" onKeyUp={handleKeyUp} />;
}

//keypress
function handleKeyPress(event) {
  console.log("key pressed! key : ", event.key);
}

function MyComponent3() {
  return <input type="text" onKeyPress={handleKeyPress} />;
}

export default {
  MyComponent1,
  MyComponent2,
  MyComponent3,
};
