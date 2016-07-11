var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");

var schoolController = require("./controllers/schoolController");

var app = express(); 
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyparser.json());
app.use("/api", schoolController)

app.listen(7777,function(){
	console.log("running on 7777");
})

mongoose.connect("mongodb://localhost/schoolfinder");