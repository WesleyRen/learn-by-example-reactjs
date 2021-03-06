var DeathEaters = React.createClass({
  getInitialState: function() {
    console.log('1. getInitialState');

    return {
      names: ['Alecto Carrow', 'Amycus Carrow']
    };
  },
  componentWillMount: function() { // state change will NOT cause a re-render-
    console.log('2. componentWillMount');

    this.setState((prevState) => {
      var names = this.state.names.concat();
      names.push('Regulus Black');
      names.push('Igor Karkaroff');
      names.push('Bellatrix Lestrange');
      names.push('Barty Crouch, Jr.');

      return {
        names: names
      };
    });

    window.addEventListener('customevent', function() {
      console.log('Custom event triggered');
    });
  },

  render: function() {
    console.log('3. render');

    var index = 0;
    return (
      <div>
        {this.state.names.map(
        (name) => <div className="deatheater"
                       key={name}
                       ref={'deatheater' + index++}>{name}</div>

        )}
      </div>
    );
  },
  componentDidMount: function() {
    console.log('4. componentDidMount');

    this.refs.deatheater1.innerHTML = "blah"; // replace by ref.

    window.dispatchEvent(new Event('customevent'));
  }
})

ReactDOM.render(<DeathEaters />, document.getElementById("outer"));
