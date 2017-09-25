class EmailForm extends React.Component {
    // Step 5
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            propertyType: 'condo'
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Step 4
    handleEmailChange(email) {
        this.setState({email: email});
    }

    handleNameChange(name) {
        this.setState({name: name});
    }

    handlePropertyTypeChange(propertyType) {
        this.setState({propertyType: propertyType});
    }

    // Step 3
    handleSubmit(e) {
        console.log('Email address submitted: ' + this.state.email);
        console.log('Name submitted: ' + this.state.name);
        console.log('Property type submitted: ' + this.state.propertyType);

        // Prevent default so the default form submission doesn't
        // get triggered.
        e.preventDefault();
    }

    // Step 2: Only one text input at a time.
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput label={"Email"}
                           handleChange={this.handleEmailChange}/>
                <TextInput label={"Name"}
                           handleChange={this.handleNameChange}/>
                <SelectInput label={"Property Type"}
                             options={this.props.propertyTypeOptions}
                             handleChange={this.handlePropertyTypeChange}/>

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

// Step 7
EmailForm.defaultProps = {
    propertyTypeOptions: [
        'condo',
        'townhome',
        'house'
    ]
};

// Step 1
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
        );
    }
}

// Step 6
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
        );
    }

}


ReactDOM.render(<EmailForm />, document.getElementById('outer'));
