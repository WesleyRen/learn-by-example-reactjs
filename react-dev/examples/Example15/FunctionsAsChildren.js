function Numbers(props) {
  var numberList = [];

  for (var i = 1; i <= props.upto; i++) {
    numberList.push(props.children(i));
  }

  return <div> {numberList} </div>;
}

function List(props) {
  return (
    <Numbers upto={props.upto}>
      {(index) => <div key={index}> {index} </div>}
    </Numbers>
  );
}

ReactDOM.render(<List upto={10} />, document.getElementById('outer'));
