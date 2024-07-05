const fs = require('fs');

// stream은 buffer에 비해서 메모리를 절약할 수 있다.
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark : 16 } /* 16 byte 씩 데이터를 끊는다. */)
const data = []

readStream.on('data', (chunk) => {
    data.push(chunk)
    console.log('data:', chunk, chunk.length)
})

readStream.on('end', () => {
    console.log(Buffer.concat(data).toString())
})

readStream.on('error', (err) => {
    console.error('error:', err)
})