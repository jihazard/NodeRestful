var express = require('express')
var app = express();

var router = express.Router();
var path = require('path')
var mysql = require('mysql')

var bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

var connection = mysql.createConnection({
    host:"yoonjh238.iptime.org",
    port:63306,
    user : "root",
    password : "root",
    database :"web"
})

connection.connect();

router.get("/" ,function(req,res){
    console.log(" movie / get ")
    let obj = {};
    let query = connection.query("select * from movie",function(err,rows){
        if(err) throw err;
            if(rows.length){
                obj.result="1";
                obj.data=rows;        
            }else{
                obj.result="0"
            }
            res.json(obj)
        })       
})


router.post("/" ,function(req,res){
   
    let obj = {};
    let sql = {
        title : req.body.title,
        actor : req.body.actor,
        grade : req.body.grade,
        type : req.body.type
    }
 
    let query = connection.query("INSERT INTO movie SET ?" , sql ,function(err,rows){
        console.log(" movie / POST " + JSON.stringify(rows))
        if(err) throw err
        else{
            obj.result="1"
            obj.data=rows
            res.json(obj)
        }
    })
})

router.delete("/:title",function(req,res){
   
    let obj = {};
    const title = req.params.title
    console.log(title)
    let query = connection.query("delete from movie where title = ? " , [title] ,function(err,rows){
        console.log(" movie / delete " + JSON.stringify(rows) )
        if(err) throw err
        else{
            obj.result="1"
            obj.data=rows
            res.json(obj)
        }
    })
})




module.exports= router
