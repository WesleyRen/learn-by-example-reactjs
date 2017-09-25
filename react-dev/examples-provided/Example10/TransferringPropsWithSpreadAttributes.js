var Student = React.createClass({
    render: function() {
        // The ... is the spread operator which can be used to
        // pass all the properties of the object to the child
        // component
        // Individual props can be overridden by specifying
        // its value separately
        return <div className="student">
            <div> Name: {this.props.name} </div>
            <Info {...this.props} />
            <Info {...this.props} clubs={'Darts, Swimming'}/>
        </div>
    }
});


var Info = React.createClass({
    render: function() {
        return <div className='info'>
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
    }
});

ReactDOM.render(<Student name="John"
                         grade="5"
                         clubs="Chess, Tennis"
                         subjects="Math, Science"/>,
    document.getElementById('outer'));
