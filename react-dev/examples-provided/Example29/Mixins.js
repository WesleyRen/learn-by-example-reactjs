// Step 2
var DefaultGreetingMixin = {
    getDefaultProps: function() {
        return {
          greeting: 'Hello!'
        };
    }
};

// Step 1
var Greeting = React.createClass({
    mixins: [
        DefaultGreetingMixin
    ],
    // Step 4
    // The properties in the mixin and in the
    // default props specified here are merged
    // together.
    // Both instances of getDefaultProps will
    // be called
    // You cannot have more than one instance of
    // the render method
    // Don't specify the same property name in the
    // mixin as well as the the method here,
    // React will throw an error while merging the
    // props object keys

    getDefaultProps: function() {
        return {
            message: 'Here is a message for you'
        }
    },
    render: function() {
        return  (
            <div>
                <div>
                    {this.props.greeting}
                </div>
                <div>
                    {this.props.message}
                </div>
            </div>
        );
    }
});

// Step 3
var AnotherGreeting = React.createClass({
    mixins: [
        DefaultGreetingMixin
    ],
    render: function() {
        return  (
            <div>
                <div>
                    {this.props.greeting}
                </div>
            </div>
        );
    }
});


ReactDOM.render(<Greeting />,
    document.getElementById('outer1'));
ReactDOM.render(<AnotherGreeting />,
    document.getElementById('outer2'));
