var Number = React.createClass({
    render: function() {
        return (
            <div className="number">{this.props.number}</div>
        );
    }
});

var LastChangeMessage = React.createClass({
    getInitialState: function() {
        return {
            message: 'FIRST number in the list'
        }
    },
    // Set this up last in this component
    componentWillReceiveProps: function(nextProps) {
        console.log('componentWillReceiveProps');

        var message = 'This number is the SAME as the previous one';
        var currentNumber = this.props.number;
        if (nextProps.number > this.props.number) {
            message = 'This number is LARGER than the previous one';
        } else if (nextProps.number < this.props.number) {
            message = 'This number is SMALLER than the previous one';
        }

        this.setState({
            message: message
        });
    },
    render: function() {
        return (
            <div className="message">{this.state.message}</div>
        );
    }
});

var StreamingNumbers = React.createClass({
    getDefaultProps: function() {
        return {
          numbers: [
              2, 5 , 4, 4, 12, 9, 16,
              13, 12, 12, 20, 19, 23, 26,
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
                <LastChangeMessage number={nextNumber} />
                <Number number={nextNumber} />
                <button className="button" onClick={this.next}>
                    Get next
                </button>
            </div>
        );
    }
});



ReactDOM.render(<StreamingNumbers />, document.getElementById('outer'));
