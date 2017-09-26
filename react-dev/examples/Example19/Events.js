var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },

  incrementCounter: function(e) {
    console.log("Event type: " + e.type + " Counter value: " + this.state.counter);
    /* using lambda */
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  },

  showMessage: function(e) {
    console.log("Event type: " + e.type + " Counter value: " + this.state.counter);
  },

  render: function() {
    return (
      <div>
        <div className="box">
          {this.state.counter}
        </div>
        <button className="button"
                onClick={this.incrementCounter}
                onMouseOverCapture={this.showMessage}>
                +
        </button>
      </div>
    );
  }

})
ReactDOM.render(<Counter/>, document.getElementById("outer"));
