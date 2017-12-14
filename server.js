var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var cloudinary = require('cloudinary-core')
var path = require('path');

var app = express()
var port = 1995;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname + '/'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})
app.listen(port, (err) =>{
    if(err) throw err;
    console.log('App is booming on the legendary port 1995!!')
})