const http = require('http')
const port = process.env.PORT || 4000

const server = http.createServer(function(request, response) {
  const reqHeaders = request.headers
  const reqMethod = request.method
  const reqURL = request.url

  const responseBody = { headers: reqHeaders, method: reqMethod, url: reqURL }

  if (reqMethod === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(responseBody, null, 2))
  }
  response.end()
})

server.listen(port, function() {
  console.log('api server up!', server.address(), 'port', port)
})
