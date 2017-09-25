// The React.createClass creates a reusable component

// It takes a specification object as the input and this object
// here has a single 'render' function defined. This specifies
// what makes up a component, its look and feel

// The 'render' function is the bare minimum that has to exist in
// this specification object

// This object encapsulates the state of the component
var HelloWorld = React.createClass({
    render: function() {
        // This can return null or a React element based on the
        // current state.
        // This is a stateless component so we simply return a
        // static element
        return React.createElement(
            'h3', {className: 'highlight'}, 'Hello world from a component!');
    }
});

var HelloWorldJsx = React.createClass({
    render: function() {
        return <h3 className='highlight-jsx'> 
                    Hello world from a component using JSX! 
               </h3>
    }
});

var reactComponentElement = React.createElement(HelloWorld);
ReactDOM.render(reactComponentElement,
    document.getElementById('reactclass-1'));

ReactDOM.render(<HelloWorld />,
    document.getElementById('reactclass-2'));

ReactDOM.render(<HelloWorldJsx />,
    document.getElementById('reactclass-3'));
