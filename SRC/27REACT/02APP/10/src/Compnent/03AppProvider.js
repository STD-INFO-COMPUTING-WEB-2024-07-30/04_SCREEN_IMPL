import React, { useState } from "react";
import AppContext from "./03AppContext";

function AppProvider({ children }) {
  const [data, setData] = useState(); // 전역 데이터
  const value = {data,setData,};      // value 속성을 통해 제공할 데이터 설정
  
   // AppContext.Provider : Context 값을 제공할때 사용
   // AppContext.Consumer : Context 값을 읽어올때 사용
  console.log('children',children)
  return (
      <AppContext.Provider value={value}>    
        {children} 
      </AppContext.Provider>
    )
}
export default AppProvider;
