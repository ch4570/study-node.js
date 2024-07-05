const fs = require('fs')

// 백그라운드로 보내지는 작업이므로, 순서대로 실행되지 않는다 -> 실행 할때마다 다른 결과가 나옴
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err
    }

    console.log('1번', data.toString())
})

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err
    }

    console.log('2번', data.toString())
})

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err
    }

    console.log('3번', data.toString())
})

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err
    }

    console.log('4번', data.toString())
})