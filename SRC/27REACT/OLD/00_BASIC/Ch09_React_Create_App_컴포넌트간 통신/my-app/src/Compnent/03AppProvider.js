import React, { useState } from "react";
import AppContext from "./03AppContext";

function AppProvider({ children }) {
  const [data, setData] = useState("");  // 전역 데이터

  // value 속성을 통해 제공할 데이터 설정
  const value = {
    data,
    setData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
