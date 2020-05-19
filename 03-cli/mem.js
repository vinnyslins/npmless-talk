#!/home/vinnyslins/.nvm/versions/node/v12.16.3/bin/node
const { freemem, totalmem } = require('os')

const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)

console.log(`${mem}MB free from ${total}MB`)
