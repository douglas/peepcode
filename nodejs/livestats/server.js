var http = require('http'),
    util = require('util');

var server = http.createServer(function(request, response) {
    request.addListener('end', function() {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        response.write(util.inspect(request));
        response.end();
    });
});

server.listen(8000);
