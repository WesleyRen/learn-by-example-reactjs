class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            nameValue: '',
            propertyTypeValue: 'condo'
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This keeps the React state in sync with the internal
    // state of the <input> element
    // The form component is synced with the latest changes
    // Useful for validation of forms, error checking etc.
    handleEmailChange(e) {
        // Update the state with the input value each time the
        // input changes
        this.setState({emailValue: e.target.value});
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handlePropertyTypeChange(e) {
        this.setState({propertyTypeValue: e.target.value});
    }

    // Define code for this method to handle form submission.
    // The name of the method should be handleSubmit
    // This allows React to handle form submission, rather than
    // using the browser default submission.
    handleSubmit(e) {
        console.log('Email address submitted: ' + this.state.emailValue);
        console.log('Address submitted: ' + this.state.nameValue);
        console.log('Property type submitted: ' + this.state.propertyTypeValue);

        // Prevent default so the default form submission doesn't
        // get triggered.
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="label">
                    Email address:
                </div>
                <input className="input" type="text"
                       value={this.state.emailValue}
                       onChange={this.handleEmailChange} />
                <div className="label">
                    Name:
                </div>
                <textarea className="input"
                       value={this.state.nameValue}
                       onChange={this.handleNameChange} />
                <div className="label">
                    Property type:
                </div>
                <select value={this.state.propertyTypeValue}
                       onChange={this.handlePropertyTypeChange} >
                    <option value="condo">Condo</option>
                    <option value="townhome">Townhome</option>
                    <option value="house">House</option>
                </select>
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
};

ReactDOM.render(<EmailForm />, document.getElementById('outer'));
