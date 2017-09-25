
var Box = React.createClass({
    // Set up the initial state using this method.
    getInitialState: function() {
        return {
          textColor: 'white',
          backgroundColor: 'darkslategrey'
        }
    },
    render: function() {
        // State values can be accessed via the this.state
        // variable
        const divStyle = {
          color: this.state.textColor,
          backgroundColor: this.state.backgroundColor
        };

        // First only show the box
        return (
            <div>
                <div className="box" style={divStyle}>
                    Welcome to React!
                </div>
            </div>
        );
    }
});


ReactDOM.render(<Box />, document.getElementById('outer'));
