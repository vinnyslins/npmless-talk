#!/home/vinnyslins/.nvm/versions/node/v12.16.3/bin/node
const { networkInterfaces } = require('os')

const { address } = Object.values(networkInterfaces())
  .flat()
  .find(details => details.family === 'IPv4' && !details.internal)

console.log(address)
