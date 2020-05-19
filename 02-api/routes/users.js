const { promises: { readFile, writeFile } } = require('fs')
const { join } = require('path')

module.exports = {
  createUser: (req, res) => {
    const data = []

    req.on('data', chunck => {
      data.push(chunck)
    })

    req.on('end', async () => {
      try {
        const { name, age } = JSON.parse(Buffer.concat(data))

        const json = await readFile(join(__dirname, '../data/users.json'))
        const users = JSON.parse(json)

        users.push({ name, age })

        await writeFile(join(__dirname, '../data/users.json'), JSON.stringify(users, null, 2))

        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write('User created')
        res.end()
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.write('Internal error')
        res.end()
      }
    })
  },

  getUsers: async (req, res) => {
    const users = await readFile(join(__dirname, '../data/users.json'))

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(users)
    res.end()
  }
}
