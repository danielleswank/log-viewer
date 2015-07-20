jest.dontMock('../LogStore');
jest.dontMock('object-assign');

describe('LogStore', function() {

  // mock actions inside dispatch payloads
  var authLog = {"type":"auth.attempt","time":"1970-01-11T16:39:03.747Z","id":"icc6d0rr","audit":{"suspicious":true,"comment":""},"event":{"user":"Corkery_Kristin","success":false,"error":"quo","addr":"119.202.211.134","raddr":"56.226.118.62"}};
  var serverLog = {"type":"session.log","time":"1970-01-04T09:01:46.443Z","id":"icc60z7o","audit":{"suspicious":true,"comment":"Eum doloremque excepturi temporibus eum est a."},"event":{"user":"Urban_Friesen","commands":[{"command":"sint quo rem dolores doloremque illum quis","output":"ZWFxdWUgcmF0aW9uZSBldCByYXRpb25lIGluY2lkdW50IG5lc2NpdW50IGlk","code":2}]}};

  var actionLoadLogs = {
    source: 'VIEW_ACTION',
    action: {
      actionType: 'LOAD_LOGS',
      data: {
        logs: [
          authLog,
          serverLog
        ]
      }
    }
  };

  var actionEditLog = {
    source: 'VIEW_ACTION',
    action: {
      actionType: 'EDIT_LOG',
      data: {
        id: authLog.id,
        log: authLog
      }
    }
  };

  var AppDispatcher;
  var LogStore;
  var callback;

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    LogStore = require('../LogStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no log items', function() {
    var all = LogStore.getAll();
    expect(all).toEqual({});
  });

  /* Not working yet
  it('gets all log items', function() {
    callback(actionLoadLogs);
    var all = LogStore.getAll();
    var keys = Object.keys(all);
    expect(keys.length).toBe(2);
    expect(all[keys[1]].text).toEqual('foo');
  });
  */

});
