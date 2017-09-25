
function Todo(props) {
    return <div> TODO: {props.item}</div>
}

function List(props) {
    var list = ['clean car', 'finish email', 'do groceries'];

    // Pass in an arbitrarily complex Javascript expression as
    // the child expression for a component.
    // This expands into a list of JSX expressions
    return (
        <ul>
            {list.map((todo) => <Todo key={todo} item={todo}/>)}
        </ul>
    );
}

ReactDOM.render(<List/>,
    document.getElementById('outer'));
