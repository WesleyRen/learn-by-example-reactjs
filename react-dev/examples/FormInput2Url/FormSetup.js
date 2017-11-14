class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      propertyTypes: [],
    };
    this.stateObj = { purpose: "user inputs" }; // this is arbitary. Can be empty.

    this.assemble = this.assemble.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  assemble(combinedInputs, key) {
    combinedInputs = combinedInputs + key + "=" + this.state[key] + "&";
    return combinedInputs;
  }

  updateUrlHist() {
    let pathname = window.location.pathname;
    let hashPartValue = Object.keys(this.state)
    .filter((key) => {return (this.state[key].length > 0)})
    .reduce(this.assemble, '')
    .slice(0, -1);;
    console.log(hashPartValue);

    history.replaceState(this.stateObj, "inputs",
      pathname + "#" + hashPartValue);
    console.log(window.location.href);
  }

  handleEmailChange(email) {
    this.setState({email: email}, () => { this.updateUrlHist() });
  }
  handleNameChange(name) {
    this.setState({name: name}, () => { this.updateUrlHist() });
  }
  handlePropertyTypeChange(propertyTypes) {
    this.setState({propertyTypes: propertyTypes}, () => { this.updateUrlHist() });
  }

  handleSubmit(e) {
    console.log('Email submitted: ' + this.state.email);
    console.log('Name submitted: ' + this.state.name);
    console.log('Property types submitted: ' + this.state.propertyTypes);

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
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.props.handleChange(value);
  }
  render() {
    return (
      <div>
        <div className="label">
            {this.props.label}
        </div>
        <select multiple value={this.props.value}
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
