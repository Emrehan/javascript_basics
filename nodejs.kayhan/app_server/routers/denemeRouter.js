const express = require('express');
const router = express.Router();

const ctrl = require('../controller/denemeController');

//Üsttekiler export örneği alttaki router örneği
//appRouterOrnekte bu sayfaya sadece /router ile gelinirse geliyor

router.use(function (req,res,next) {
    console.log("Middleware yani ara yazılım. Hazır bir sürü olabileceği gibi örnekteki gibi bizde yazabiliriz." +
        "Örneğin şuan bu router'a gelen istekleri router kontrol etmeden önce değiştirme imkanı veriyor.");

    console.log("Mesela bu degisken appRouterOrnek'ten geldi "+req.yenidegisken);

    next();
});

router.use(function (err,req,res,next) {
    console.error("Buda error mesajı pek detay yok lazım olursa aklımda olsun.");
    console.error(err.stack);
    res.status(404).send("bozuldu!");
})

router.get('/',ctrl.deneme);  // /router/ diye gelirse bu
router.get('/bb',ctrl.deneme2);  // /router/bb diye gelirse bu çalışıyor

module.exports = router;  //bunu yaparsan router kullanabilirsin
