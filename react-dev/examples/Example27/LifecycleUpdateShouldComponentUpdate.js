var Number = React.createClass({
  render: function() {
    return (
      <div className="number">{this.props.number}</div>
    );
  }
});

var MaxNumber = React.createClass({
  getInitialState: function() {
    return {
      maxNumber: this.props.number
    };
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.number > this.state.maxNumber) {
      this.setState({
        maxNumber: nextProps.number
      });
    }
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextProps.number <= this.state.maxNumber) {
      return false;
    }
    return true;
  },
  render: function() {
    console.log("render() in MaxNumber: " + this.state.maxNumber);
    return (
      <div className="maxnumber">{this.state.maxNumber}</div>
    )
  }
});

var StreamingNumbers = React.createClass({
  getDefaultProps: function() {
    return {
      numbers: [
        1, 5, 7, 1, 2, 8, 8, 12, 50, 30, 20, 25
      ]
    };
  },
  getInitialState: function() {
    return {
      index: 0
    };
  },
  next: function() {
    this.setState(function(prevState) {
      return {
        index: prevState.index + 1
      }
    });
  },
  render: function() {
    var nextNumber = this.props.numbers[this.state.index];

    return (
      <div className="box">
        <MaxNumber number={nextNumber}/>
        <Number number={nextNumber} />
        <button className="button" onClick={this.next}>
          Get nextNumber
        </button>
      </div>
    );
  }
});


var LastChangeMessage = React.createClass({
  getInitialState: function() {
    return {
      message: 'First number in the list'
    }
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps');
    var message = 'This number is the SAME as the previous one';
    if (nextProps.number > this.props.number) {
      message = 'This number is LARGER than the previous one';
    } else if (nextProps.number < this.props.number) {
      message = 'This number is SMALLER than the previous one';
    }
    this.setState(function() {
      return {
        message: message
      }
    })
  },

  render: function() {
    return (
      <div className="message">{this.state.message}</div>
    );
  }
});



ReactDOM.render(<StreamingNumbers/>, document.getElementById("outer"));
