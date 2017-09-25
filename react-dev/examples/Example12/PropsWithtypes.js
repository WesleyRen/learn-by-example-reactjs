var Contents = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    number: React.PropTypes.number,
    enabled: React.PropTypes.bool,
    important: React.PropTypes.string.isRequired,
    dogName: function(properties, propertyName, componentName) {
      var propertValue = properties[propertyName];
      if (propertValue != 'Oba' && propertValue != 'Moje') {
        throw Error('Value should be Oba or Moje.');
      }
    }
  },
  getDefaultProps: function() {
    return {
      text: 'These are the contents of this container.',
      number: 3,
      enabled: true,
      important: 'blah',
      dogName: 'Oba'
    };
  },
  render: function() {
    return (
      <div className='contents'>
        <div>
          Text: {this.props.text}
        </div>
        <div>
          Number: {this.props.number}
        </div>
        <div>
          Enabled: {this.props.enabled ? 'true' : 'false'}
        </div>
        <div>
          Important: {this.props.important}
        </div>
        <div>
          Dog: {this.props.dogName}
        </div>
      </div>
    );
  }
})

ReactDOM.render(<Contents />, document.getElementById('outer'));
