var AppDispatcher = require('../dispatcher/AppDispatcher');

var LogActions = {
  loadLogs: function(logs) {
    // console.log('LogActions:loadLogs', logs);
    AppDispatcher.dispatch({
      actionType: 'LOAD_LOGS',
      data: {
        logs: logs
      }
    });
  },

  editLog: function(id, log) {
    // console.log('LogActions:editLog', log);
    AppDispatcher.dispatch({
      actionType: 'EDIT_LOG',
      data: {
        id: id,
        log: log
      }
    });
  },
};

module.exports = LogActions;