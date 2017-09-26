function Todo(props) {
  return <div> {props.index}: {props.item} </div>
}

function List(props) {
  var list = ['clean car', 'finish email', 'do groceries'];

  return (
    <div>
      <h3> TODO: </h3>
      <ul>
        {list.map((todo, index) => <Todo key={todo} index={index + 1} item={todo}/>)}
      </ul>
    </div>
  );
}

ReactDOM.render(<List />, document.getElementById('outer'));
