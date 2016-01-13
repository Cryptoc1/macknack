#!/usr/bin/env node

var express = require('express'),
	fs = require('fs')
	app = express();

app.get('/', function(req, res) {
	fs.readFile('mac.json', function(err, data) {
		res.send(JSON.parse(data));
	});
});

app.get('/search', function(req, res) {
	fs.readFile('mac.json', function(err, data) {
		data = JSON.parse(data);
		var ret = [];
		for (i in data) {
			if (req.query.vendor) {
				if (data[i].vendor.toLowerCase().includes(req.query.vendor.toLowerCase())) {
					ret.push(data[i])
				}
			} else if (req.query.mac) {
				if (data[i].MAC.includes(req.query.mac)) {
					ret.push(data[i])
				}
			}
		}
		res.send(ret)
	});
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
