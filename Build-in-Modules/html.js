const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {                // req is the attribute at user's end, contains .url, .method
    const url = req.url
    let str = '<h1>404 Not Found<h1>'
    if (url === '/' || url === '/index.html') {
        str = '<h1>Main page</h1>'
    } else if (url === '/about.html') {
        str = '<h1>About page</h1>'
    }
    console.log('Someone visited our web server.')
    // console.log(str)

    // respond to the requester
    res.setHeader('Content-Type', 'text/html; charset=utf-8')       // optional
    res.end(str)
})

server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')      // :80 can be omitted
})