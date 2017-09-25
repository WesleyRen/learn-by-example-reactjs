
var Box = React.createClass({
    // Set up the initial state using this method.
    getInitialState: function() {
        return {
          textColor: 'white',
          backgroundColor: 'darkslategrey',
          // This should actually not be in a the state
          // as it is not changed at all!
          // This should be in the props
          text: 'Welcome to React!'
        }
    },
    handleTextColorClick: function() {
        var colors = [
            'yellow',
            'lightgreen',
            'orange',
            'fuchsia',
            'aquamarine'
        ];
        var colorIndex = Math.floor(Math.random() * colors.length);

        // Never modify the state directly, always use setState
        // The component will not re-render when state is
        // modified
        this.setState({
            textColor: colors[colorIndex]
        });
    },
    handleBgColorClick: function() {
        var colors = [
            'darkslategrey',
            'darkgreen',
            'darkblue',
            'black',
            'darkred'
        ];
        var colorIndex = Math.floor(Math.random() * colors.length);

        this.setState({
            backgroundColor: colors[colorIndex]
        });
    },
    render: function() {
        // State values can be accessed via the this.state
        // variable
        const divStyle = {
          color: this.state.textColor,
          backgroundColor: this.state.backgroundColor
        };

        // First only show the box
        // Then add the button and the click handler to change the text color
        // Then add the button and the click handler to change the bg color
        // Show that the changes to one property does not affect the other
        // React merges the states and updates only the right one
        return (
            <div>
                <div className="box" style={divStyle}>
                    {this.state.text}
                </div>
                <button className="button" onClick={this.handleTextColorClick}>
                    Change text color
                </button>
                <button className="button" onClick={this.handleBgColorClick}>
                    Change background color
                </button>
            </div>
        );
    }
});


ReactDOM.render(<Box />, document.getElementById('outer'));
