var Comment = React.createClass({
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
            <img src="images/delete.png" />
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
          (message) =>
            <Comment key={message} message={message} />
        )
      }
      </div>
    )
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
  getInitialState: function() {
    return {
      messages: [
        'This is message 001.',
        'This is message 002.',
        'This is message 003.',
        'This is message 004.',
        'This is message 005.'
      ]
    };
  },
  render: function() {
    return (
      <div>
        <CommentBox />
        <CommentList messages={this.state.messages}/>
      </div>
    );
  }
});

ReactDOM.render(<CommentApp/>, document.getElementById("outer"));
