const fs = require('fs')

// 파일 변경 이벤트 감시
fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename)
})