const http = require("http");

const server = http.createServer(function(req, res) {
    res.write("Ola mundo!");
    res.end();
});

server.listen(3000, function() {
    console.log("Hello World!");
});