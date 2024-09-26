//01 if문
function MyComponent1({isLoggedIn}) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}
//02 삼항연산자
function MyComponent2({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
//03 && 연산자
function MyComponent3({items}) {
  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map  (item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      {items.length === 0 && <p>No items found.</p>}
    </div>
  );
}

//04 && 연산자
function MyComponent4({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}

export default {
  MyComponent1,
  MyComponent2,
  MyComponent3,
  MyComponent4
}