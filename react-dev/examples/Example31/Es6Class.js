var Contents = React.createClass ({
  propTypes: {
    message: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      message: 'Hello World!'
    };
  },
  getInitialState: function() {
    return {
      currentState: 'LIVE'
    };
  },
  handleClick() {
    console.log(
      'What is "this" bound to in React createClass?: ' + this
    );
  },
  render: function() {
    return (
      <div>
        <div>
          {this.props.message}
        </div>
        <div>
          {this.state.currentState}
        </div>
        <button className="button" onClick={this.handleClick}>
          click this
        </button>
      </div>
    );
  }
});

class ContentsES6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: 'LIVE'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(
      'What is "this" bound to in ES6 class?: ' + this
    );
  }
  render() {
    return (
      <div>
        <div>
          {this.props.message}
        </div>
        <div>
          {this.state.currentState}
        </div>
        <button className="button" onClick={this.handleClick}>
          click this
        </button>
      </div>
    );
  }
};

ContentsES6.defaultProps = {
  message: 'Hello World!'
};

ContentsES6.propTypes = {
  message: React.PropTypes.string
};

ReactDOM.render(<Contents />, document.getElementById("outer1"));
ReactDOM.render(<ContentsES6 />, document.getElementById("outer2"));
