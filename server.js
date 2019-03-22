var express = require('express');
var app = express();
var mongoose=require('mongoose')
var dbconnection=require('./config')
 

var port = process.env.PORT || 5000;

mongoose.connect(dbconnection.dbURL,(err,response)=>{
     if(err){
         console.log('mongodb connection err')
     }else{
         console.log("mongodb connected sucessfully")
     }

})
 app.listen(port,(err,res)=>{
     if(err){
         console.log(err)
     }else{
         console.log(`app lostening port${port}`)
     }

 })

