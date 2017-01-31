var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function (req,res){
    fs.readFile('index.html',function(err,data){
        if(err){
            console.log(err);
            res.writeHead(404,{'Content-Type': 'text/html'});
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});  
            res.write(data.toString());
        }
        res.end();
    });
});

//express route
app.get('/test',function (req,res){
    fs.readFile('guide.html',function(err,data){
        if(err){
            console.log(err);
            res.writeHead(404,{'Content-Type': 'text/html'});
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});  
            res.write(data.toString());
        }
        res.end();
    });
});

var server = app.listen(80,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

