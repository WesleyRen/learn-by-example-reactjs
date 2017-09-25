
var Comment = React.createClass({
    // Step 9: Delete using comment index
    deleteComment: function() {
      this.props.deleteComment(this.props.index);
    },
    render: function() {
        // Step 10: Add onClick handler for each comment
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
                    <td className="delete" onClick={this.deleteComment}>
                        <img src="images/delete.png"/>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
});

var CommentList = React.createClass({
    // Step 8: Pass in an index for every comment to help with
    // delete. Pass in remaining props to access deleteComment
    // function
    render: function() {
        var index = 0;
        return (
            <div className="commentList">
                {
                    this.props.messages.map(
                        (message) =>
                            <Comment key={message}
                                     message={message}
                                     index={index++}
                                     {...this.props} />
                    )
                }
            </div>
        );
    }
});


var CommentBox = React.createClass({
    // Step 4: Call the parent to add a comment
    addComment: function() {
        this.props.addComment(this.refs.messageInput.value);
    },
    render: function() {
        // Step 3:
        // The ref is added here so we can access the value
        // in the input box. We'll talk about refs in more
        // detail later on in the course.
        // Step 5: Set up the onClick for the button
        return (
            <div className="commentbox">
                <input ref="messageInput" className="input" />
                <button className="button"
                    onClick={this.addComment}>
                    Post
                </button>
            </div>
        );
    }
});


var CommentApp = React.createClass({
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
    // Step 1: Changes to the state such as adding new messages
    // should be done at the top level components. This ensures
    // that a redraw across the board is triggered
    // This is still optimal in React because of the virtual DOM
    // Only the difference is redrawn in the actual DOM.
    addComment: function(message) {
      this.setState(function(prevState) {
          var messages = prevState.messages.concat();
          messages.push(message);
          return {
              messages: messages
          }
      });
    },

    // Step 6: Delete a comment by index
    deleteComment: function(index) {
        this.setState(function(prevState) {
            var messages = prevState.messages.concat();
            messages.splice(index, 1);
            return {
                messages: messages
            }
        });
    },
    render: function() {
        // Step 2: Pass the ability to add a comment to the CommentBox
        // Child components use functions in the props to update state

        // Step 7: Delete comment passed to child CommentList
        return (
            <div>
                <CommentBox addComment={this.addComment}/>
                <CommentList messages={this.state.messages}
                             deleteComment={this.deleteComment}/>
            </div>
        );
    }
});


// Use this to display the individual components that we
ReactDOM.render(<CommentApp />, document.getElementById('outer'));
