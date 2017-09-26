var Comment = React.createClass({
  deleteComment: function() {
    this.props.deleteComment(this.props.index);
  },
  render: function() {
    return (
      <table className="comment">
        <tbody>
        <tr>
          <td className="photo">
            <img src="images/happyFace.png" />
          </td>
          <td className="message">
            {this.props.message}
          </td>
          <td className="delete">
            <img src="images/delete.png" onClick={this.deleteComment}/>
          </td>
        </tr>
        </tbody>
      </table>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="CommentList">
      {
        this.props.messages.map(
          (message, index) =>
            <Comment key={message} message={message} index={index} {...this.props}/>
        )
      }
      </div>
    )
  }
});

var CommentBox = React.createClass({
  addComment: function() {
    this.props.addComment(this.refs.messageInput.value);
  },
  render: function() {
    return (
      <div className="commentbox">
        <input ref="messageInput" className="input" />
        <button className="button" onClick={this.addComment}>
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
        'This is message 001.',
        'This is message 002.',
        'This is message 003.',
        'This is message 004.'
      ]
    };
  },
  addComment: function(message) {
    this.setState(function(prevState) {
      var messages = prevState.messages.concat(); // concat creates a new array.
      messages.push(message);
      return {
        messages: messages
      }
    });
  },
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
    return (
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages}
                     deleteComment={this.deleteComment}/>
      </div>
    );
  }
});

ReactDOM.render(<CommentApp/>, document.getElementById("outer"));
