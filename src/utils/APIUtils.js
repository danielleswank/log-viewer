var _ = require('lodash');
var $ = require('zepto-browserify').$;
var Promise = require('es6-promise').Promise;

var LogActions = require('../actions/LogActions');

var APIUtils = {
  get: function(url) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type:'GET',
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data) {
          resolve(data);
        },
        error: function(xhr, type) {
          reject(xhr);
        }
      });
    });
  },

  getLogs: function () {
    APIUtils.get('/events').then(function(data) {
      LogActions.loadLogs(data);
    }, function(err) {
      console.error(xhr, type);
    });
  }
};

module.exports = APIUtils;