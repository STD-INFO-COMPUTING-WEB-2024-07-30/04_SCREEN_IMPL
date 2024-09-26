//01 데이터 로딩 상태에 따른 렌더링
function MyComponent1({isLoading, items}) {
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  //02 사용자 권한에 따른 렌더링
  function MyComponent2({user}) {
    return (
      <div>
        {user.role === 'admin' && (
          <button>Admin users Info</button>
        )}
        {user.role === 'member' && (
          <button>Member users Info</button>
        )}        
        <p>Welcome, {user.name}!</p>
      </div>
    );
  }

  //03   반복되는 컴포넌트의 조건부 렌더링
  function MyComponent3({items}) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.isNew && <span>New! </span>}
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
  



  
  export default {
    MyComponent1,
    MyComponent2,
    MyComponent3 
  }