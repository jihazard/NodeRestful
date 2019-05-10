var express = require('express')
var app = express();

var router = express.Router();
var path = require('path')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user : "hyb",
    password : "hyb01",
    database :"com"
})

connection.connect();

router.get("/" ,function(req,res){
    console.log(" movie / get ")
    let query = connection.query("select * from movie",function(err,rows){
        if(err) throw err;
        let obj = {};
            if(rows.length){
                obj.result="1";
                obj.data=rows;        
            }else{
                obj.result="0"
            }
    })
    res.json(obj)
})





module.exports= router


