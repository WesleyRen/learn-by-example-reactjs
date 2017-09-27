class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      nameValue: '',
      propertyTypeValue: 'condo'
    };

    // by default "this" is not bound, which is null.
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    // without bind above, this will be undefined.
    this.setState({emailValue: e.target.value});
  }

  handleNameChange(e) {
    this.setState({nameValue: e.target.value});
  }

  handlePropertyTypeChange(e) {
    this.setState({propertyTypeValue: e.target.value});
  }

  handleSubmit(e) {
    console.log('Email address submitted: ' + this.state.emailValue);
    console.log('Name submitted: ' + this.state.nameValue);
    console.log('Propert type submitted: ' + this.state.propertyTypeValue);

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
        <p className="input">
          {this.state.emailValue}
        </p>

        <div className="label">
          Name:
        </div>
        <textarea className="input"
          value={this.state.nameValue}
          onChange={this.handleNameChange} />

        <div className="label">
          Propert Type:
        </div>
        <select value={this.state.propertyTypeValue}
          onChange={this.handlePropertyTypeChange} >
          <option value="condo">Condo</option>
          <option value="house">House</option>
          <option value="townhome">Townhome</option>
        </select>
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(<EmailForm />, document.getElementById("outer1"));
