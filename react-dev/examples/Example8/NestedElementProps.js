var Container = React.createClass({
  someText: 'Child Three via a property',

  render: function() {
    return (
      <div className='container'>
        <Contents text='Child One Hardcoded.' />
        <Contents text={"Child Two via an Expression"} />
        <Contents text={this.someText} />
        <Contents text={1 + 2 + 3} />
      </div>
    );
  }
});

var Contents = React.createClass({
  render: function() {
    return (
      <div className='contents'>
        {this.props.text}
      </div>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById('container'));
