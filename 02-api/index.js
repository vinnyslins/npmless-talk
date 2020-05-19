const http = require('http')
const { parse } = require('url')

const routes = require('./routes')

const server = http.createServer((req, res) => {
  const { pathname } = parse(req.url)

  if (routes[pathname] && routes[pathname][req.method]) {
    return routes[pathname][req.method](req, res)
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.write(`Cannot ${req.method} ${pathname}`)
  res.end()
})

server.listen(3000)
