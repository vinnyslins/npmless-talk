module.exports = {
  hello: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello!!!')
    res.end()
  }
}
