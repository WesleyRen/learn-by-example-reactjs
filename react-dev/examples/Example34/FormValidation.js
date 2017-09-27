class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      propertyType: 'condo',
    };

    this.errors = {
      name: true,
      email: true
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validateName = this.validateName.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email) {
    if (!/.+@.+\..+/.test(email)) {
      this.errors.email = true;
      return false;
    }
    this.errors.email = false;
    return true;
  }

  validateName(name) {
    if (!name || name.length < 5) {
      this.errors.name = true;
      return false;
    }
    this.errors.name = false;
    return true;
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
    e.preventDefault();

    if (this.errors.email) {
      alert('Please enter a valid email address');
      return;
    } else if (this.errors.name) {
      alert('Please enter a name with at least 5 characters');
      return;
    }
    console.log('Email submitted: ' + this.state.email);
    console.log('Name submitted: ' + this.state.name);
    console.log('Property type submitted: ' + this.state.propertyType);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput  label={"Email"}
                    validate={this.validateEmail}
                    handleChange={this.handleEmailChange} />
        <TextInput  label={"Name"}
                    validate={this.validateName}
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
    this.state = {
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var errorMessage = '';
    if (this.props.validate(e.target.value)) {
      this.props.handleChange(e.target.value);
    } else {
      errorMessage = '* Invalid';
    }

    this.setState({errorMessage: errorMessage});
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
        <ErrorMessage message={this.state.errorMessage} />
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
    var errorMessage = '';
    if (this.props.validate(e.target.value)) {
      this.props.handleChange(e.targt.value);
    } else {
      errorMessage = '* Invalid';
    }

    this.setState({errorMessage: errorMessage});
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

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="error">
        {this.props.message}
      </span>
    );
  }
}

ReactDOM.render(<EmailForm/>, document.getElementById("outer1"));
