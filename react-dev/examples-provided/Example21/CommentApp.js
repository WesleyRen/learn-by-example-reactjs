
// Step 1: Start with this one, an individual comment
var Comment = React.createClass({
    render: function() {
        return (
            <table className="comment">
                <tbody>
                <tr>
                    <td className="photo">
                        <img src="images/happyface.png"/>
                    </td>
                    <td className="message">
                        Some happy message here.
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

// Step 2: Then build up the comment list
var CommentList = React.createClass({
    render: function() {
        return (<div className="commentList">
            <Comment key={1} />
            <Comment key={2} />
            <Comment key={3} />
            <Comment key={4} />
        </div>);
    }
});

// Step 3: Only the comment box
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

// Step 4: Put all of this together
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


// Display individual comments as you build them up.
ReactDOM.render(<CommentApp />, document.getElementById('outer'));
