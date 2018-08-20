module.exports.get = function (req, res) {
    res.render('login');
};

module.exports.post = function (req, res) {
    console.log(req.body);

    res.render('login', {
        username: req.body.uname,
        pass: req.body.psw
    });
};