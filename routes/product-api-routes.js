let db = require("../models");

module.exports = function(app) {
    app.get ("api/home", function(req,res){
        db.Product.findAll({ })
        .then(function (results){
            res.json(results);
        })
    })

//     app.post("api/home", function(req,res){
//         db.Product.create({req.body})
//     })
}