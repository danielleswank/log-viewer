var fs = require('fs');
var path = require('path');
var mock = require('./libs/mock');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/events', function (req, res) {
  // console.log(req.query);

  fs.readFile('mocklog.txt', 'utf8', function (err,data) {
    var isSession, mockdata = [];

    if (!err) {
      res.send(data);
      return;
    }

    // create the mock data if there isn't any
    for (var i = 25; i >= 0; i--) {
      isAuthLog = Boolean(Math.floor(Math.random() * 2));
      mockdata.push((isAuthLog) ? mock.authLog() : mock.sessionLog());
    };

    fs.appendFile('mocklog.txt', JSON.stringify(mockdata), function (err) {
      if (err) throw err;
    });

    res.send(mockdata);
  });
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});