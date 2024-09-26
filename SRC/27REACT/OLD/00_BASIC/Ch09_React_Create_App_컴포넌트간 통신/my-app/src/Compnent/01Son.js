

function ChildComponent1(props) {
    const { data } = props;
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
      </div>
    );
  }

  export default ChildComponent1;

  