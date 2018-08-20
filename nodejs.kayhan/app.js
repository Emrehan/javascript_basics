const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const denemeCtrl = require('./app_server/controller/denemeController');
//const ctrl = denemeCtrl(141); //Eğer constructer olursa

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/',denemeCtrl.deneme);
app.get('/bb',denemeCtrl.deneme2);

app.listen(8000);

/* //Örnek 1

const http = require('http');


http.createServer(function (req,res) {
    res.write("Requested page = "+req.url);
    res.end("\nFinished.");
}).listen(8000);
console.log("Server Listening Port 8000");

*/