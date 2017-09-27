var DefaultGreetingMixin = {
  getDefaultProps: function() {
    return {
      greeting: 'Hello!'
    };
  }
}

var Greeting = React.createClass({
  mixins: [DefaultGreetingMixin],
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
          {this.props.message}
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
