var Student = React.createClass({
    render: function() {
        return (
            <div className="student">
                <div> Name: {this.props.name} </div>
                <Academic grade={this.props.grade}
                          subjects={this.props.subjects} />
                <Extras clubs={this.props.clubs} />
            </div>
        );
    }
});


var Academic = React.createClass({
    render: function() {
        return (
            <div className='academic'>
                <div>
                    Grade: {this.props.grade}
                </div>
                <div>
                    Subjects: {this.props.subjects}
                </div>
            </div>
        );
    }
});

var Extras = React.createClass({
    render: function() {
        return (
            <div className='extras'>
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
                         subjects="Math, Science"/>,
    document.getElementById('outer'));
