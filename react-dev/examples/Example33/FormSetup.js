class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(email) {
    this.setState({email: email});
  }
  handleNameChange(name) {
    this.setState({name: name});
  }

  handleSubmit(e) {
    console.log('Email submitted: ' + this.state.email);
    console.log('Name submitted: ' + this.state.name);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput  label={"Email"}
                    handleChange={this.handleEmailChange} />
        <TextInput  label={"Name"}
                    handleChange={this.handleNameChange} />
        <input className="input" type="submit" value="Submit"/>
      </form>
    );
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="label">
          {this.props.label}
        </div>
        <input className="input" type="text"
            value={this.props.value}
            onChange={this.handleChange} />
      </div>
    )
  }
}

ReactDOM.render(<EmailForm/>, document.getElementById("outer1"));
