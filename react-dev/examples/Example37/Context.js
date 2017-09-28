class InnerBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="innerbox">
        {this.context.anotherMessage}
      </div>
    )
  }
}

InnerBox.contextTypes = {
  anotherMessage: React.PropTypes.string
};

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <InnerBox message={this.props.message} />
      </div>
    )
  }
}

class OuterBox extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {anotherMessage: "How are you?"};
  }

  render() {
    return (
      <div className="outerbox">
        <Box message={this.props.message} />
      </div>
    )
  }
}

OuterBox.childContextTypes = {
  anotherMessage: React.PropTypes.string
};

ReactDOM.render(<OuterBox message="Hellol World!"/>, document.getElementById("outer"));
