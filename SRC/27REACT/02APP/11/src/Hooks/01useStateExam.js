import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 배열 비구조화 할당으로 count, setCount 생성

  function increment() {
    setCount(count + 1); // count 값을 1 증가시킨다.
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
