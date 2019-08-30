var path = require("path");
var fs= require("fs")

module.exports = function (app) {
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/all", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/checkout", function(req,res){
        res.sendFile(path.join(__dirname,"../public/checkout.html"));
    });

};
