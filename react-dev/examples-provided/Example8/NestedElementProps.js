var Container = React.createClass({
    someText: 'Child Three via a property',
    render: function() {
        // This is not on the props object instead it is
        // a property directly on the specification object
        // (the second one)
        return <div className="container">
            <Contents text="Child One Hardcoded" />
            <Contents text={"Child Two via an Expression"} />
            <Contents text={this.someText} />
            <Contents text={1 + 2 + 3 + 4} />
        </div>
    }
});


var Contents = React.createClass({
    render: function() {
        // The text property is available via this.props
        return (
            <div className='contents'>
                {this.props.text}
            </div>
        );
    }
});

ReactDOM.render(<Container />, document.getElementById('outer'));
