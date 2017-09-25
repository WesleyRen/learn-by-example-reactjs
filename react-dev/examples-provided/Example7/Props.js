var Contents = React.createClass({
    // The default values for props is set in this method
    getDefaultProps: function() {
        return {
            text: 'These are the contents of this container'
        }
    },
    render: function() {
        // Access properties using this.props
        return <div className='contents'>
                 {this.props.text}
               </div>
    }
});

ReactDOM.render(<Contents />,
    document.getElementById('outer'));
