const os = require('os')

console.log(`System Uptime = ${os.uptime()}`)
console.log(`OS Type = ${os.type()}`) // Mac = Darwin

console.log(os.cpus())