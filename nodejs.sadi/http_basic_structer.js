const http = require('http');

function reqListener(request, response) {
    console.log(request);
    response.writeHeader(200,{
        "Context-Type" : "text-plain"
    });
    response.write("<html><body><script>alert('E141');</script></body></html>");
    response.end();
}

http.createServer(reqListener).listen(8000);
console.log("Server Listening");