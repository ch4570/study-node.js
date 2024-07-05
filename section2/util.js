const util = require('util');
const crypto = require('crypto');

// 함수가 deprecated 되었다는 것을 알려주는 경고 메시지가 출력된다.
const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y)
}, 'dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!')

dontUseMe(1, 2)

// 콜백 함수가 (error, data) 형식이어야 Promise 형식으로 변경할 수 있다.
const randomBytePromise = util.promisify(crypto.randomBytes)
randomBytePromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'))
    })
    .catch((error) => {
        console.error(error)
    })