// server.js
const express = require('express');
const app = express();
const path = require('path')


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/personaggi', function(req, res){
    res.sendFile(path.join(__dirname, 'personaggi.html'))
});

app.get('/saghe', function(req, res){
    res.sendFile(path.join(__dirname, 'saghe.html'))
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})