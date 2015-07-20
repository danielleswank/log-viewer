var React = require('react');

var LogApp = require('./components/LogApp');
var APIUtils = require('./utils/APIUtils');

React.render(
  <LogApp />,
  document.getElementById('content')
);

APIUtils.getLogs();