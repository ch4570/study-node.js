const path = require('path')

const joinPath = path.join(__dirname, '', '/var.js') // 상대경로로 처리
console.log(`joinPath: ${joinPath}`)

const resolvePath = path.resolve(__dirname, '', '/var.js') // 절대경로로 처리
console.log(`resolvePath: ${resolvePath}`)