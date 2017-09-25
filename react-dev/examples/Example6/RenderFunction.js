var casual = false;

function Hi() {
  return (
    <div className="blue">
      Hi!
    </div>
  );
}

function Hello() {
  return (
    <div className="pink">
      Hello!
    </div>
  );
}

var Greeting = React.createClass({
  render: function() {
    if (casual) {
      return <Hi />
    } else {
      return <Hello />
    }
  }
});

ReactDOM.render(<Greeting />, document.getElementById('reactclass-1'));
