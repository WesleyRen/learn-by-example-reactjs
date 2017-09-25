class ResetPasswordBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    // Cannot access the button here since that has not been added
    // as a reference
    // First
    handleButtonClick(e) {
        console.log('Initiate password reset using email: '
            + this.refs.email.value);
        console.log('Initiate password reset using email: '
            + this.emailInput.value);
    }

    // Add this last and show the difference
    componentDidMount() {
        this.emailInput.focus();
    }

    render() {
        //<input className="input" type="text" ref="email"/>
        // The second way of setting up refs is the most common
        return (
            <div>
                <div className="label">
                    Email address:
                </div>
                <input className="input" type="text"
                       ref={(input) => { this.emailInput = input; }}/>
                <button className="button" onClick={this.handleButtonClick}>
                    Send reset link
                </button>
            </div>
        );
    }
    handleButtonClick(e) {
        console.log('Initiate password reset using email: '
            + this.refs.email.value);
    }
    render() {
        return (
            <div>
                <div className="label">
                    Email address:
                </div>
                <input className="input" type="text"/>
                <button className="button" onClick={this.handleButtonClick}>
                    Send reset link
                </button>
            </div>
        );
    }
}


ReactDOM.render(<ResetPasswordBox />, document.getElementById('outer'));
