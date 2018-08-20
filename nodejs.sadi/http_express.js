const express = require('express');
const app = express();
const fs = require('fs');

app.get('/list-users',function (req, res) {
    //res.send("Users Listed");
    fs.readFile("json/users.json",'utf8',function (err,data) {
        console.log(data);
        res.end(data);
    });
});

app.get('/add-user',function (req, res) {
    var newUser = {
         "u4": {
            "name" : req.query.name,
            "email" : req.query.email,
        }
    };
    fs.readFile("json/users.json",'utf8',function (err,data) {
        data = JSON.parse(data);
        console.log(data);

        data["u4"] = newUser["u4"];

        console.log(data);
        res.end(JSON.stringify(data));

        fs.writeFile("json/users.json",JSON.stringify(data),function (err) {
            console.log("Error");
        })
    });

});

app.get('/delete-user',function (req, res) {
    fs.readFile("json/users.json",'utf8',function (err,data) {
        data = JSON.parse(data);
        console.log(data);

        var id = "u" + req.query.id;
        delete data[id];

        console.log(data);
        res.end(JSON.stringify(data));

        fs.writeFile("json/users.json",JSON.stringify(data),function (err) {
            console.log("Error");
        })
    });
});

app.get('/search-user',function (req, res) {
    fs.readFile("json/users.json",'utf8',function (err,data) {
        data = JSON.parse(data);
        var id = "u" + req.query.id;
        console.log(data[id]);
        res.end(JSON.stringify(data[id]));
    });
});

var server = app.listen(8000, function () {
    console.log('Server Listening');
});