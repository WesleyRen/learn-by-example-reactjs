
var Counter = React.createClass({
    getInitialState: function() {
        return {
          counter: 0
        }
    },

    incrementCounter: function() {
        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + props.increment
            }
        });
    },
    render: function() {
        setTimeout(this.incrementCounter, 1500)
        return (
            <div>
                <div className="box">
                    {this.state.counter}
                </div>
            </div>
        );
    }
});


ReactDOM.render(<Counter increment={5}/>,
    document.getElementById('outer'));
