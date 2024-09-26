
function ListItem({ item }) {
  
  const itemStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color : 'red',
    listStyle:'none'
  };

   return (
           <li key={item.id} style={itemStyle}>{item.name}</li>
         );
  }

  function MyList({ items }) {
    return (
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }

  export default MyList
  
  