const fs = require('fs').promises;

// 파일 하나 쓰기
fs.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('./writeme.txt')
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err
    })