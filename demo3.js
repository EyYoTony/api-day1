const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 4000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<html>')
    res.write('<body>')
    res.write('<h2>Welcome to the Hotdog API</h2>')
    res.write('<p>try a GET /hotdog</p>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  } else if (req.method === 'GET' && req.url === '/hotdog') {
    const img = fs.readFileSync(path.join(__dirname, './assets/img/hotdog.jpg'))
    res.writeHead(200, { 'Content-Type': 'image/jpg' })
    res.end(img, 'binary')
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(port)
