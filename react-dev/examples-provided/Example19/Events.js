
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    // The increment count which handles an event
    // receives and event object as its input argument
    incrementCount: function(e) {
        console.log(e.type + ' ' + this.state.counter);

        // React event handlers are autobound to have the
        // correct "this" object which references the
        // component itself not the element which fired
        // the event
        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + 1
            }
        });
    },
    showMessage: function() {
      console.log('Mouse over occurred: ' + this.state.counter);
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
                        onClick={this.incrementCount}
                        onMouseOverCapture={this.showMessage}>
                    +
                </button>
            </div>
        );
    }
});

// The onClick event is not on the component, it has to be on
// an element within the component
ReactDOM.render(<Counter />, document.getElementById('outer'));
