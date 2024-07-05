const fs = require('fs').promises

setInterval(() => {
    // 최신 노드 버전에서는 Promise 에러 처리를 하지 않으면 프로세스가 종료된다.
    fs.unlink('./abcdefg.js')
        .catch((err) => console.log(err))
}, 1000)