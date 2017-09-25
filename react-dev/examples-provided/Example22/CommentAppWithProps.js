
var Comment = React.createClass({
    render: function() {
        // Step 4: Render a message received from the props.
        return (
            <table className="comment">
                <tbody>
                <tr>
                    <td className="photo">
                        <img src="images/happyface.png"/>
                    </td>
                    <td className="message">
                        {this.props.message}
                    </td>
                    <td className="delete">
                        <img src="images/delete.png"/>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
});

var CommentList = React.createClass({
    // Step 3: Get the messages from the props and pass each message
    // in individually to a comment.
    render: function() {
        return (
            <div className="commentList">
                {
                    this.props.messages.map(
                        (message) =>
                            <Comment key={message} message={message} />
                    )
                }
            </div>
        );
    }
});


var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentbox">
                <input className="input" />
                <button className="button">
                    Post
                </button>
            </div>
        );
    }
});


var CommentApp = React.createClass({
    // Step 1: First add the list of messages to the state of the
    // comment application.
    // In real life the comment application would retrieve the
    // list of messages from the server.
    getInitialState: function() {
        return {
            messages: [
                'This is looking really good!',
                'Congratulations, this is awesome!',
                'Woot woot!',
                'What good news! I am very happy for you both:-)'
            ]
        }
    },
    render: function() {
        // Step 2: The information in the state at the top level
        // of the hierarchy is passed down in the form of props
        // to components at lower levels in the hierarchy.
        // Lower level components only read that data to display
        // it. They do not update the data i.e. the state.
        return (
            <div>
                <CommentBox />
                <CommentList messages={this.state.messages}/>
            </div>
        );
    }
});


// Use this to display the individual components that we
ReactDOM.render(<CommentApp />, document.getElementById('outer'));
