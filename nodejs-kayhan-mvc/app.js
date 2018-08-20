const path = require('path');
const express = require('express');
const app = express();
const ejsLayout = require('express-ejs-layouts');
const routers = require('./app_server/routers/routerManager');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, './app_server/views')); // varsayılan view klasörünü değiştiriyoruz. önceden direk ana klasörün altında views arardı.
app.set('view engine', 'ejs'); //view engine'i ejs olarak atıyoruz

app.use(bodyParser.urlencoded({extended:false})); //eğer req url encoded gelirse
app.use(bodyParser.json()); //json gelirse

app.use(ejsLayout);
app.use('/public', express.static(path.join(__dirname, 'public'))); //public klasörünü kullanıcıya açıyoruz.

routers(app);

app.listen(8000);