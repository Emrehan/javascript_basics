/*  Java'daki gibi contructer olabiliyor

module.exports = function (e141) {
    console.log("Success => e"+e141);
};*/

const path = require('path');

module.exports.deneme = function (req,res) {
    res.sendFile(path.join(__dirname, '../../public/html/hello.html'));
};

module.exports.deneme2 = function (req,res) {
    res.sendFile(path.join(__dirname, '../../public/html/bouncingBalls.html'));
};