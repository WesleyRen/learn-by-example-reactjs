
// Use this method if you're project is not using ES6
var Contents = React.createClass({
    // Step 6:
    handleClick: function() {
        console.log(
            'What is "this" bound to in createClass?: ' + this);
    },
    // Step 4:
    getInitialState: function() {
        return {
            currentState: 'LIVE'
        };
    },
    // Step 3
    propTypes: {
        message: React.PropTypes.string
    },
    // Step 2: Set this up the old way.
    getDefaultProps: function() {
        return {
          message: 'Hello, how are you?'
        };
    },
    // Step 1: First write this will only hello world!
    render: function() {
        return  (
            <div>
                <div>
                    {this.props.message}
                </div>
                <div>
                    {this.state.currentState}
                </div>
                <button className="button" onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        );
    }
});


class ContentsES6 extends React.Component {
    // Step 2
    constructor(props) {
        super(props);

        // Step 4
        this.state = {
            currentState: 'LIVE'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // Step 5
    handleClick() {
        console.log(
            'What is "this" bound to in ES6 class?: ' + this);
    }

    render() {
        // Step 5: First bind "this" on the click
        //<button className="button"
        //        onClick={this.handleClick.bind(this)}>
        //    Click me!
        //</button>
        // And then bind "this" in the constructor above
        return  (
            <div>
                <div>
                    {this.props.message}
                </div>
                <div>
                    {this.state.currentState}
                </div>
                <button className="button"
                        onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        );
    }
}

// Step 2
ContentsES6.defaultProps = {
    message: 'Hello, how are you?'
};

// Step 3: Use a different type and show the error
ContentsES6.propTypes = {
    message: React.PropTypes.string
};


ReactDOM.render(<Contents />, document.getElementById('outer1'));
ReactDOM.render(<ContentsES6 />, document.getElementById('outer2'));
