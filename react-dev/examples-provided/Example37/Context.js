
// Step 1
class InnerBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // First have it display nothing
        // Then add the props message
        // Step 6: Third show the context message
        return (
            <div className="innerbox">
                {this.context.anotherMessage}
            </div>
        );
    }
}


// Step 6
// This is added to the user of the context
InnerBox.contextTypes = {
    anotherMessage: React.PropTypes.string
};

// Step 2
class Box extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="box">
                <InnerBox message={this.props.message}/>
            </div>
        );
    }
}

// Step 3
class OuterBox extends React.Component {
    constructor(props) {
        super(props)
    }

    // Step 4
    getChildContext() {
        return {anotherMessage: "How are you?"};
    }

    render() {
        return (
            <div className="outerbox">
                <Box message={this.props.message} />
            </div>
        );
    }
}

// Step 5
OuterBox.childContextTypes = {
    anotherMessage: React.PropTypes.string
};

// getChildContext and childContextTypes are added to
// the context provider


ReactDOM.render(<OuterBox message="Hello"/>,
    document.getElementById('outer'));
