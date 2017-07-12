
var express = require("express");

var router = express.Router();

var db = require("../models");


module.exports = function(app){

	app.get("/", function(req, res){
		db.Burger.findAll({}).then(function(dbBurger) {
	      res.json(dbBurger);
	    });
	});


	app.post("/", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(dbBurger){
			res.json(dbBurger);
			res.redirect("/");
		});
	});


	app.put("/:id", function(req, res){
		db.Burger.update({
			devoured: true
		}).then(function(dbBurger){
			res.json(dbBurger);
			res.redirect("/");
		});
	});
};
