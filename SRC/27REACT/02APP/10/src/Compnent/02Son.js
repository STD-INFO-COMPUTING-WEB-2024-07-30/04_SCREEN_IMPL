import React from "react";

function ChildComponent(props) {
  const handleClick = () => {
    props.onChildData("Hello from child component!");
  };

  return (
    <div>
      <button onClick={handleClick}>Send message to parent</button>
    </div>
  );
}

export default ChildComponent;
