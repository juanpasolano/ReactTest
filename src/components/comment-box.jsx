import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentBox';
    }
    render() {
      return <ul className="list-group">
        {this.renderComments()}
      </ul>
    }

    renderComments() {
      return this.props.comments.map((comment) =>  {
        return <li className="list-group-item comment-box">
          <span className="badge">{comment.ups}</span>
          <h5>{comment.author}</h5>
          {comment.comment}
        </li>
      })
    }
}

export default CommentBox;
