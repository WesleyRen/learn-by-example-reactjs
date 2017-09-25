
var Number = React.createClass({
    render: function() {
        return (
            <div className="number">{this.props.number}</div>
        );
    }
});

var MaxNumber = React.createClass({
    // Set the state in this method
    componentWillReceiveProps: function(nextProps) {
        console.log('1. componentWillReceiveProps');
        if (nextProps.number > this.state.maxNumber) {
            this.setState({
                maxNumber: nextProps.number
            });
        }
    },
    // Have this method first return true
    // Then add the condition within the method.
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('2. shouldComponentUpdate');
        // Do not call set state in this method
        if (nextProps.number > this.state.maxNumber) {
            return true;
        }
        return false;
    },
    getInitialState: function() {
        return {
            maxNumber: this.props.number
        };
    },
    componentWillUpdate: function() {
        console.log('3. componentWillUpdate');
    },
    render: function() {
        console.log('4. render');
        return (
           <div className="maxnumber">{this.state.maxNumber}</div>
        );
    },
    componentDidUpdate: function() {
        console.log('5. componentDidUpdate');
    }
});

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
