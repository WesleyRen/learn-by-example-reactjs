var casual = true;

// Create a component which can render one or the other component
// based on a dynamically set value
// Components usually have their first letter capitalized
var Greeting = React.createClass({
    // A function helps dynamically determine what this component
    // renders
    render: function() {
        // This global variable determines what kind of
        // value will be returned
        if (casual) {
            // Can return only one root from a component
            return <Hi/>
        } else {
            return <Hello />
        }
    }
});

// Another way that components can be declared
function Hello() {
    // JSX understands curly braces and parses the JS code within it
    var now = new Date();
    return
        <div className="pink">
            Hello! The current year is {now.getFullYear()}
        </div>
}

function Hi() {
    var now = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return
        <div className="blue">
            Hi! Today is {days[now.getDay()]}
        </div>
}

ReactDOM.render(<Greeting />,
    document.getElementById('reactclass-1'));
