const { hello } = require('./hello')
const { createUser, getUsers } = require('./users')

module.exports = {
  '/': {
    GET: hello
  },
  '/users': {
    POST: createUser,
    GET: getUsers
  }
}
