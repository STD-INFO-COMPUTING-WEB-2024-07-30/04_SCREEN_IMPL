import React, { useContext } from "react";
import AppContext from "./03AppContext";

function ChildComponent() {
  const { data, setData } = useContext(AppContext); // AppContext에서 data와 setData를 가져옴

  function handleClick() {
    setData("ChildComponent1 setData 사용!");
  }

  return (
    <div>
      <button onClick={handleClick}>Set Data</button>
      <p>Data from AppContext: {data}</p>
    </div>
  );
}

export default ChildComponent;