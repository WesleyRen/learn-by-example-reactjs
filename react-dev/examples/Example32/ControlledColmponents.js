class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: 'Some value',
    };

    // by default "this" is not bound, which is null.
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    // without bind above, this will be undefined.
    this.setState({emailValue: e.target.value});
  }

  handleSubmit(e) {
    console.log('Email address submitted: ' + this.state.emailValue);

    e.preventDefault(); // Otherwise submittion will use native event handling.
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="label">
          Email address:
        </div>
        <input className="input" type="text"
          value={this.state.emailValue}
          onChange={this.handleEmailChange}/>
        <p>
          {this.state.emailValue}
        </p>
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(<EmailForm />, document.getElementById("outer1"));
