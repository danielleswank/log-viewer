var React = require('react');
var _ = require('lodash');

var LogStore = require('../stores/LogStore');
var Log = require('./Log');

var LogApp = React.createClass({
  getInitialState: function() {
    return {
      logs: LogStore.getLogs()
    };
  },

  onChange: function() {
    this.setState(this.getInitialState());
  },

  componentDidMount: function() {
    LogStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    LogStore.removeChangeListener(this.onChange);
  },

  render: function() {
    var logs = _.map(this.state.logs, function(log, i) {
      return (
        <li key={i} >
          <Log log={log}/>
        </li>
      );
    });

    return (
      <div className="log-app">
        <h1>Log Viewer</h1>
        <ul>
         {logs}
        </ul>
      </div>
    );
  }
});

module.exports = LogApp;