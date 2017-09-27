class ResetPasswordBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    console.log('Initiate password reset using email (reference component): ' +
        this.refs.email.state.value);
    var el = ReactDOM.findDOMNode(this.refs.email);
    console.log('Initiate password reset using ' + el.id);
  }

  render() {
    return (
      <div>
        <TextInput label="Email---" className="input" type="text"
              ref="email" />
        <button className="button" onClick={this.handleButtonClick}>
          Send reset link
        </button>
      </div>
    );
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div id={this.props.label}>
        <div className="label">
          {this.props.label}
        </div>
        <input className="input" type="text"
                value={this.props.value}
                onChange={this.handleChange}/>
      </div>
    );
  }
}

ReactDOM.render(<ResetPasswordBox />, document.getElementById("outer1"));
