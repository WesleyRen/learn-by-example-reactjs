var Contents = React.createClass({
    propTypes: {
        // Step 1:
        text: React.PropTypes.string,
        number: React.PropTypes.number,
        enabled: React.PropTypes.bool,
        // Step 5
        important: React.PropTypes.string.isRequired,
        // Step 7:
        // properties: Component properties object
        // propertyName: Name of the property to validate
        // componentName: The name of the component
        // First run this without specifying the property
        // Display the property in the div
        dogName: function(properties, propertyName, componentName) {
            var propertyValue = properties[propertyName];
            if (propertyValue != 'Oba' && propertyValue != 'Moje') {
                throw Error('Value should be Oba or Moje');
            }
        }
    },
    // Step 2:
    getDefaultProps: function() {
        return {
            text: 'These are the contents of this container',
            number: 3,
            enabled: true,
            important: 'blah',
            // Step 9
            dogName: 'Oba'
        }
    },
    // Step 3:
    render: function() {
        // Step 6: Add the important property in and make it
        // an incompatible type
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
                    Dog name: {this.props.dogName}
                </div>
            </div>
        );
    }

    // Step 4: Show how we get an error when we change the types to those
    // that do not match
    // Validation is only in debug mode and not in production
});

ReactDOM.render(<Contents />,
    document.getElementById('outer'));

var Contents = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'These are the contents of this container',
            number: 3,
            enabled: true
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
            </div>
        );
    }
});


ReactDOM.render(<Contents />,
    document.getElementById('outer'));
