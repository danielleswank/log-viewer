var React = require('react/addons');

var CommentBox = React.createClass({
  render: function() {
    return (
      <input
        className="comment-box"
        onInput={this.props.onInput}
        defaultValue={this.props.comment}
        placeholder="Reason for flag" />
    );
  }
});

module.exports = CommentBox;