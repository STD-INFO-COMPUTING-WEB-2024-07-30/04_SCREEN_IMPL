const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Durian' },
];

function ListItem({ item }) {
  const handleClick = (key,event) => {
    console.log('KEY : ', key);
    console.log(event.target)
    event.target.innerHTML=`MY KEY NUMBER : ${key}`;
  };
  return (
    <li key={item.id} style={{fontSize:'1.2rem',margin:'20px',listStyle:'none'}}>
      {item.name} <button onClick={(event)=>{handleClick(item.id,event)}}>MY KEY NUMBER : </button>
    </li>
  );

}

function MyList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MyList;
