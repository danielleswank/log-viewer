var casual = require('casual');

exports.authLog = function() {
  return {
    "type": "auth.attempt",
    "time": new Date(casual.unix_time).toISOString(),// ISO 8601 time
    "id": (+new Date() + Math.floor(Math.random() * 999999)).toString(36), // unique event id
    "audit": {
      "suspicious": casual.random_element([true, false]), // true if marked as suspicious
      "comment": casual.random_element(["", casual.short_description]), // optional comment from auditor
    },
    "event": {
      "user": casual.username, // SSH login user name
      "success": casual.random_element([true, false]), // true if auth was successfull
      "error": casual.word, // error contains rejection reason
      "addr": casual.ip, // IP address of the SSH server
      "raddr": casual.ip, // IP address of the user
    }
  };
};

exports.sessionLog = function() {
  return {
    "type": "session.log",
    "time": new Date(casual.unix_time).toISOString(), // ISO 8601 time
    "id": (+new Date() + Math.floor(Math.random() * 999999)).toString(36), // unique event id
    "audit": {
      "suspicious": casual.random_element([true, false]), // true if marked as suspicious
      "comment": casual.random_element(["", casual.short_description]), // comment may be empty if not set
    },
    "event": {
      "user": casual.username, // SSH login user name
      "commands": [
        {
          "command": casual.string, // full command string
          "output": new Buffer(casual.string).toString('base64'), // base64-encoded command output
          "code": casual.random_element([0, 1, 2, 100]), // command result code
        }
      ]
    }
  };
};
