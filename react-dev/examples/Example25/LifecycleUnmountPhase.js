var DeathEaterList = React.createClass({
  getInitialState: function() {
    return {
      names: ['Alecto Carrow', 'Amycus Carrow', 'Regulus Black', 'Bellatrix Lestrange']
    };
  },
  deleteRandom: function() {
    var index = Math.floor(Math.random() * this.state.names.length);

    this.setState(function(prevState) {
      var names = prevState.names.concat();
      names.splice(index, 1);
      return {
        names: names
      };
    });
  },
  render: function() {
    return (
      <div>
        {this.state.names.map(
          (name, index) => <DeathEater key={index} name={name} />
        )}
        <button className="button" onClick={this.deleteRandom}>
          Delete a random Death Eater
        </button>
      </div>);
  }
});

var DeathEater = React.createClass({
  getInitialState: function() {
    console.log('1. getInitialState: ' + this.props.name);
    return {};
  },
  componentWillMount: function() {
    console.log('2. componentWillMount: ' + this.props.name);
  },
  render: function() {
    console.log('3. render: ');
    return (
      <div>
        <div className="deatheater">
          {this.props.name}
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    console.log('4. componentDidMount: ' + this.props.name);
  },
  componentWillUnmount: function() {
    console.log('5. componentWillUnmount: ' + this.props.name);
  }
});

ReactDOM.render(<DeathEaterList />, document.getElementById("outer"));
