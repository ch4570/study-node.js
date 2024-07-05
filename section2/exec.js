const exec = require('child_process').exec

// 터미널에 명령을 실행해준다.
let process = exec('echo rex is developer')

process.stdout.on('data', data => {
    console.log(data.toString())
})

process.stderr.on('data', data => {
    console.error(data.toString())
})