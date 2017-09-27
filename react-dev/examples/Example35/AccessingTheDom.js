class ResetPasswordBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    console.log('Initiate password reset using email: ' +
      this.emailInput.value);
  }

  componentDidMount() {
    this.emailInput.focus();
  }
  render() {
    return (
      <div>
        <div className="label">
          Email address:
        </div>
        {/* <input className="input" type="text" ref="email"/> */}
        <input className="input" type="text"
            ref={(input) => { this.emailInput = input; }} />
        <button className="button" onClick={this.handleButtonClick}>
          Send reset link
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ResetPasswordBox />, document.getElementById("outer1"));
