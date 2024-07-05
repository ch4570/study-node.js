const fs = require('fs').promises;

// 파일 하나 읽기
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data)
        console.log(data.toString())
    })
    .catch((err) => {
        throw err
    })