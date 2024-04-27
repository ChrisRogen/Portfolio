const http = require("http")
const fs = require("fs")
const mongoose = require("mongoose")

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("index.html").pipe(res);

    }
);

server.listen(12000, function(){
    console.log("server is running on port 12000")
})