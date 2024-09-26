import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;


// window.localStorage는 클라이언트 측 웹 스토리지

//데이터 저장하기: 
//localStorage.setItem(key, value) 메서드를 사용하여 key와 value를 저장합니다. value는 문자열 형태로 저장됩니다.

//데이터 불러오기: 
//localStorage.getItem(key) 메서드를 사용하여 key에 해당하는 값을 가져옵니다. 만약 해당하는 key가 없다면 null을 반환합니다.

//데이터 삭제하기: 
//localStorage.removeItem(key) 메서드를 사용하여 key에 해당하는 값을 삭제합니다.

//localStorage에 저장된 데이터는 브라우저 개발자 도구의 Application 탭에서 확인할 수 있습니다.




