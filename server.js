//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.get('/getUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})
app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

// Node server.js