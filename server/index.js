var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use("/client", express.static('client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function (req, res) {
	res.sendFile(path.resolve('client/index.html'));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
