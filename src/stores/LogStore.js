var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _logs = {};

function editLog(id, log) {
  _logs[id] = log;
}

function loadLogs(logs) {
  var log;

  for (var i = logs.length - 1; i >= 0; i--) {
    log = logs[i];
    _logs[log.id] = log;
  }
  // localStorage.setItem('logs', JSON.stringify(_logs));
}

var LogStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _logs;
  },

  get: function(id) {
    return _logs[id];
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

// Register callback to handle all updates
LogStore.dispatchToken = AppDispatcher.register(function(action) {
  var data = action.data;

  switch(action.actionType) {
    case 'EDIT_LOG':
      editLog(data.id, data.log);
      break;

    case 'LOAD_LOGS':
      loadLogs(data.logs);
      break;
  }

  LogStore.emitChange();
});

module.exports = LogStore;