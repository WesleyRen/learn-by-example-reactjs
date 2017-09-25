class EmailForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            propertyType: 'condo',
        };

        // Step 5: Set a state to know whether the email
        // and the name are valid or not
        // This is our own local variable on the component
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

    // Step 6: First set up only the email validation
    validateEmail(email) {
        if (!/.+@.+\..+/.test(email)) {
            this.errors.email = true;
            return false;
        }
        this.errors.email = false;
        return true;
    }

    // Step 8: This sets the errors.email property
    validateName(name) {
        if (!name || name.length < 5) {
            this.errors.name = true;
            return false;
        }

        this.errors.name = false;
        return true;
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

    handleSubmit(e) {
        // Prevent default so the default form submission doesn't
        // get triggered.
        e.preventDefault();


        // Step 9: Ensure that the name and email have no
        // errors before submit
        if (this.errors.email) {
            alert('Please enter a valid email address');
            return;
        } else if (this.errors.name) {
            alert('Please enter a name having a minimum of 5 characters');
            return;
        }

        // This is where the data is sent to the server.
        console.log('Email address submitted: ' + this.state.email);
        console.log('Name submitted: ' + this.state.name);
        console.log('Property type submitted: ' + this.state.propertyType);
    }

    render() {
        // Step 7: Pass in the email validation method here
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput label={"Email"}
                           validate={this.validateEmail}
                           handleChange={this.handleEmailChange}/>
                <TextInput label={"Name"}
                           validate={this.validateName}
                           handleChange={this.handleNameChange}/>
                <SelectInput label={"Property Type"}
                             options={this.props.propertyTypeOptions}
                             handleChange={this.handlePropertyTypeChange}/>

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

EmailForm.defaultProps = {
    propertyTypeOptions: [
        'condo',
        'townhome',
        'house'
    ]
};

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        // Step 2
        this.state = {
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // Step 4
        var errorMessage = '';

        if (this.props.validate(e.target.value)) {
            // Update the property only when it is valid
            this.props.handleChange(e.target.value);
        } else {
            errorMessage = '* Invalid';
        }

        this.setState({errorMessage: errorMessage});
    }

    render() {
        // Step 3: Add error message here
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
        );
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
        );
    }

}

// Step 1
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


ReactDOM.render(<EmailForm />, document.getElementById('outer'));
