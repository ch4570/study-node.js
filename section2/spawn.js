const spawn = require('child_process').spawn

// 외부 코드(python 등)를 사용할 수 있다.
const process = spawn('python3', ['test.py'])

process.stdout.on('data', data => {
    console.log(data.toString())
})

process.stderr.on('data', data => {
    console.error(data.toString())
})