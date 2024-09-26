import React from 'react';
import useLocalStorage from './07CustomHookExam';

function useLocalStorageFunc() {
  const [name, setName] = useLocalStorage('name', '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello {name || 'World'}!</h1>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}

export default useLocalStorageFunc;