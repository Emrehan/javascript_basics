module.exports.index = function (req, res) {
    res.render('example', {
        var1: "Deneme degiskeni",
        var2: true,
        var3: ["Emrehan", "Neslihan", "Mustafa"]
    });
};
