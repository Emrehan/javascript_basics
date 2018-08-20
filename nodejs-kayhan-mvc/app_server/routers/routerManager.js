var loginRouter = require('./loginRouter');
var siteRouter = require('./indexRouter');
var exampleRouter = require('./exampleRouter');



module.exports = function(app) {

    app.use(function (req,res,next) {
        var ip = req.ip.split(':');
        console.log(ip[ip.length-1]);
        /*if(ip!=="1"){
            console.warn("This is just for me. Go Away!");
        }else{
            next();
        }*/
        next();
    });

    app.use('/',siteRouter);
    app.use('/login',loginRouter);
    app.use('/example',exampleRouter);
};