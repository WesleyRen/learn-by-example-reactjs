
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    incrementCount: function(e) {
        var increment = 1;
        if (e.shiftKey) {
            increment = 10;
        }
        if (e.altKey) {
            increment = 100;
        }
        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + increment
            }
        });
    },
    render: function() {
        // The onClick handler has to be on the element within
        // the component
        // Event listening can be done on the capture phase
        // by properties with the "Capture" suffix
        return (
            <div>
                <div className="box">
                    {this.state.counter}
                </div>
                <button className="button"
                        onClick={this.incrementCount}>
                    + (Can use Alt or Shift keys)
                </button>
            </div>
        );
    }
});

// The onClick event is not on the component, it has to be on
// an element within the component
ReactDOM.render(<Counter />, document.getElementById('outer'));
