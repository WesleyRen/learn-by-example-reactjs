
function Numbers(props) {
    var numberList = [];
    for (var i = 1; i <= props.upto; i++) {
        // Access the function which is the child
        // of the component
        // The function argument is the index of the
        // element
        numberList.push(props.children(i));
    }

    return <div>{numberList}</div>
}

function List(props) {
    return (
        <Numbers upto={props.upto}>
            {(index) => <div key={index}> {index} </div>}
        </Numbers>
    );
}

ReactDOM.render(<List upto={10}/>,
    document.getElementById('outer'));
