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
            Some happy messages.
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
        <Comment key={1} />
        <Comment key={2} />
        <Comment key={3} />
        <Comment key={4} />
        <Comment key={5} />
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
  render: function() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
});

ReactDOM.render(<CommentApp/>, document.getElementById("outer"));
