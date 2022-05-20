const data = require('./data.json');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
// res.send(JSON.stringify(data));
   console.log("Req recived")
   res.json(data);
})

var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
})