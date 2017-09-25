
// Step 1
var Number = React.createClass({
    render: function() {
        return (
            <div className="number">{this.props.number}</div>
        );
    }
});

// Step 3
var MaxNumber = React.createClass({
    getInitialState: function() {
        return {
            maxNumber: this.props.number
        };
    },
    // Set the state in this method
    componentWillReceiveProps: function(nextProps) {
        if (nextProps.number > this.state.maxNumber) {
            this.setState({
                maxNumber: nextProps.number
            });
        }
    },
    // Have this method first return true
    // Then add the condition within the method.
    shouldComponentUpdate: function(nextProps, nextState) {
        // Do not call set state in this method
        if (nextProps.number > this.state.maxNumber) {
            return true;
        }
        return false;
    },
    render: function() {
        return (
           <div className="maxnumber">{this.state.maxNumber}</div>
        );
    }
});

// Step 2
var StreamingNumbers = React.createClass({
    getDefaultProps: function() {
        return {
          numbers: [
              2, 5 , 4, 4, 12, 9, 16,
              13, 14, 12, 20, 19, 23, 26,
              35, 29, 27, 1, 2, 45
          ]
        };
    },
    getInitialState: function() {
        return {
          index: 0
        };
    },
    // Set this up last in this component
    next: function() {
        this.setState(function(prevState) {
            return {
                index: prevState.index + 1
            }
        });
    },
    render: function() {
        var nextNumber = this.props.numbers[this.state.index];
        return (
            <div className="box">
                <MaxNumber number={nextNumber} />
                <Number number={nextNumber} />
                <button className="button" onClick={this.next}>
                    Get next
                </button>
            </div>
        );
    }
});



ReactDOM.render(<StreamingNumbers />, document.getElementById('outer'));
