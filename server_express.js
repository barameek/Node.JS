// node server_express.js
// http://localhost:8081/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/index.htm', function (req, res) {
   res.send('This is index.htm');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})