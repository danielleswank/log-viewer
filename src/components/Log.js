var React = require('react/addons');
var _ = require('lodash');

var CommentBox = require('./CommentBox');
var ToggleBox = require('./ToggleBox');

var Log = React.createClass({
  onToggle: function(e) {
    e.preventDefault();
    // stub
  },
  onInput: function(e) {
    e.preventDefault();
    // stub
  },

  render: function() {
    var log = this.props.log;
    return (
      <div className="log">
        <ToggleBox onToggle={this.onToggle} checked={log.audit.suspicious} />
        <CommentBox onInput={this.onInput} comment={log.audit.comment} />
        <code className="event">{log.event}</code>
      </div>
    );
  }
});

module.exports = Log;