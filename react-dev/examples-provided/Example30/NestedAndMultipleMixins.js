var DefaultGreetingMixin = {
    getDefaultProps: function() {
        return {
          greeting: 'Hello!'
        };
    },

    // Step 3
    // If a lifecycle method is present in both the
    // mixin and in the component, the mixin method
    // is run first.
    componentWillMount: function() {
        console.log('Mixin componentWillMount()');
    }
};

// Step 1
var RandomOuterMixin = {
    mixins: [DefaultGreetingMixin]
};

// Step 2
var DefaultStateMixin = {
    getInitialState: function() {
        return {
            currentState: 'INITIALIZING'
        };
    }
};

// Step 1
var Greeting = React.createClass({
    // Ensure that the different mixins that you use do
    // not have the same method defined
    mixins: [
        RandomOuterMixin, DefaultStateMixin
    ],

    // Step 3
    componentWillMount: function() {
        console.log('Component componentWillMount()');
    },
    render: function() {
        return  (
            <div>
                <div>
                    {this.props.greeting}
                </div>
                <div>
                    {this.state.currentState}
                </div>
            </div>
        );
    }
});


ReactDOM.render(<Greeting />,
    document.getElementById('outer1'));
