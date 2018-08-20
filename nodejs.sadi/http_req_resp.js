const http = require('http');
const fs = require('fs'); //file system

function reqHandler(request, response) {
    if(request.url == '/'){
        response.writeHeader(200,{"Context-Type" : "plain-text"});
        fs.createReadStream('./html/hello.html').pipe(response);
    }else if(request.url == '/bb'){
        response.writeHeader(200,{"Context-Type" : "plain-text"});
        fs.createReadStream('./html/bouncingBalls.html').pipe(response);
    }
}

http.createServer(reqHandler).listen(8000);
console.log("Server Listening");