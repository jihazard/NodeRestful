var express = require('express')
var app = express();

var router = express.Router();
var path = require('path')
var movie = require('../router/movie')

router.get("/" ,function(req,res){
    res.render("index.ejs")
})

router.use("/movie",movie)





module.exports= router


