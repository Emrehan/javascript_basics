const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

var denemeRouter = require('./app_server/routers/denemeRouter');

app.use('/public', express.static(path.join(__dirname, 'public')));

// middleware, req ve res'u değiştirmenize olanak verir. Burdada olur her router içerinde de olur
app.use(function (req,res,next) {
    console.log(req.url);
    req.yenidegisken = true;
    next(); //bu sonraki ara yazılımı çağırır! => egitim'e bak
});
//////////////////////////////////////////////////////////////////////////////////////////////////

app.use('/router',denemeRouter);

app.listen(8000);

//routeElektronik router döndürüyor artık o yüzden direk routeElektroniğe adresi veriyoruz o içerde yapıyor.
