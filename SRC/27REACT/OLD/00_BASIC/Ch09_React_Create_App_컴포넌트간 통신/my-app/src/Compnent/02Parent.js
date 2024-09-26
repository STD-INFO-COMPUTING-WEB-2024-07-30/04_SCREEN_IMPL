//02 자식 -> 부모로는  부모에서 사용가능한 콜백함수 전달을 통해 데이터 전달

import React, { useState } from 'react';
import ChildComponent from './02Son';

function ParentComponent() {
  const [message, setMessage] = useState('');

  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <ChildComponent onChildData={handleChildData} />
      <p>Message from child component: {message}</p>
    </div>
  );
}

export default ParentComponent;
