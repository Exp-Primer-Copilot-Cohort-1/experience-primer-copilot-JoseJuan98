// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Create a route handler
// 4. Send a response
// 5. Listen on port

// 1. Create a web server
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // 2. Create a route
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the overview');
    } else if (pathName === '/product') {
        res.end('This is the product');
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end('{"message": "This is the API"}');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world',
        });
        res.end('<h1>Page not found!</h1>');
    }
});

// 5. Listen on port
server.listen(8000, '