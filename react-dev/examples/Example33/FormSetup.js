class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      propertyType: 'condo',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(email) {
    this.setState({email: email});
  }
  handleNameChange(name) {
    this.setState({name: name});
  }
  handlePropertyTypeChange(propertyType) {
    this.setState({propertyType: propertyType});
  }

  handleSubmit(e) {
    console.log('Email submitted: ' + this.state.email);
    console.log('Name submitted: ' + this.state.name);
    console.log('Property type submitted: ' + this.state.propertyType);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput  label={"Email"}
                    handleChange={this.handleEmailChange} />
        <TextInput  label={"Name"}
                    handleChange={this.handleNameChange} />
        <SelectInput label={"Property Type"}
                    options={this.props.propertyTypeOptions}
                    handleChange={this.handlePropertyTypeChange} />
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

class SelectInput extends React.Component {
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
        <select value={this.props.value}
                onChange={this.handleChange}>
          {
            this.props.options.map(
              (option) => <option key={option}
                                  value={option}>{option}</option>
            )
          }
        </select>
      </div>
    )
  }
}

EmailForm.defaultProps = {
    propertyTypeOptions: ['condo', 'townhome', 'house']
};

ReactDOM.render(<EmailForm/>, document.getElementById("outer1"));
