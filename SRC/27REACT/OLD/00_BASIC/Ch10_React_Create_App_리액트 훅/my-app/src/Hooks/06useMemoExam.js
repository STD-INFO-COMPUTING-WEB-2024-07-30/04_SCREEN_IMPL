import React, { useMemo } from "react";

//useMemo 훅을 이용하여 배열 items을 정렬한 값을 캐싱하는 예시

function List({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b); //items.sort((a, b) => a - b) 오름차순정렬
  }, [items]); // items 배열이 변경될 때마다 새로운 배열 생성

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export default List;
