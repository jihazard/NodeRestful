var express = require('express')
var app = express();
var cors = require('cors')
var bodyparser = require('body-parser')

var mysql = require('mysql')
var index = require('./router/index')


app.set("view enging","ejs");
app.use(express.static('public'))
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


app.use("/",index)

app.listen(3000,function(){
    console.log("-------server start--------")
})