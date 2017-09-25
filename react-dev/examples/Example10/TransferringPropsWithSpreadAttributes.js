var Student = React.createClass({
  render: function() {
    return (
      <div className='student'>
        <div>
          name: {this.props.name}
        </div>
        <Info {...this.props}/>
        <Info {...this.props} clubs={'Darts, Swimming'}/>
      </div>
    );
  }
});

var Info = React.createClass({
  render: function() {
    return (
      <div className='info'>
        <div>
          Grade: {this.props.grade}
        </div>
        <div>
          Subjects: {this.props.subjects}
        </div>
        <div>
          Clubs: {this.props.clubs}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Student name="John"
                         grade="5"
                         clubs="Chess, Tennis"
                         subjects="Math, Science"/>, document.getElementById('outer'));
