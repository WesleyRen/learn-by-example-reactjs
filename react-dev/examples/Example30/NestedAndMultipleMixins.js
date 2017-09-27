var DefaultGreetingMixin = {
  getDefaultProps: function() {
    return {
      greeting: 'How are you!'
    };
  },
  componentWillMount: function() {
    console.log('Mixin componentWillMount() in DefaultGreetingMixin');
  }
};

var RandomOuterMixin = {
  mixins: [DefaultGreetingMixin]
};

var DefaultStateMixin = {
  getInitialState: function () {
    return {
      currentState: 'INITIALIZING'
    };
  }
};

var Greeting = React.createClass({
  mixins: [RandomOuterMixin, DefaultStateMixin],
  componentWillMount: function() {
    console.log('Component componentWillMount() in Greeting');
  },
  getDefaultProps: function() {
    return {
      message: 'Here is a message for you'
    }
  },
  render: function() {
    return (
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

var AnotherGreeting = React.createClass({
  mixins: [DefaultGreetingMixin],
  render: function() {
    return (
      <div>
        {this.props.greeting}
      </div>
    );
  }
})

ReactDOM.render(<Greeting/>, document.getElementById("outer1"));
ReactDOM.render(<AnotherGreeting/>, document.getElementById("outer2"));
