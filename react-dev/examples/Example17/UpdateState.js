var Box = React.createClass({
  getInitialState: function() {
    return {
      textColor: 'white',
      backgroundColor: 'darkslategrey',
      // If text doesn't change, it shouldn't be part of state. Put in props.
      text: 'Welcome to React from state property'
    }
  },

  render: function() {
    const divStyle = {
      color: this.state.textColor,
      backgroundColor: this.state.backgroundColor
    };

    return (
      <div>
        <div className="box" style={divStyle}>
          {this.state.text}
        </div>
        <button className="button" onClick={this.handleTextColorClick}>
          Change text color
        </button>
        <button className="button" onClick={this.handleBGColorClick}>
          Change background color
        </button>
        <button className="button" onClick={this.handleAllColorClick}>
          Change both colors
        </button>
      </div>
    );
  },

  handleTextColorClick: function() {
    var colors = [ 'yellow', 'lightgreen', 'orange', 'fuchsia', 'aquamarine', 'violet', 'blue', 'purple'];
    var colorIndex = Math.floor(Math.random() * colors.length);

    this.setState({
      textColor: colors[colorIndex]
    });
  },
  handleBGColorClick: function() {
    var colors = [ 'yellow', 'lightgreen', 'orange', 'fuchsia', 'aquamarine', 'violet', 'blue', 'purple'];
    var colorIndex = Math.floor(Math.random() * colors.length);

    this.setState({
      backgroundColor: colors[colorIndex]
    });
  },
  handleAllColorClick: function() {
    this.handleTextColorClick();
    this.handleBGColorClick();
  }
})

ReactDOM.render(<Box />, document.getElementById("outer"));
