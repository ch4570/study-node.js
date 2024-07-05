/*
*  한번 읽은 정보는 require.cache에 저장해둔다.
*  -> require.cache는 비울 수 있지만 내장 객체는 왠만하면 건드리지 않는 것이 좋다.
*  -> require.cache를 비우면 코드 수정시에 라이브로 반영되게 할 수 있다 -> 직접 다룰 일은 잘 없다.
* */
require('./var.js')

console.log(require)

// 직접 가져올 수도 있지만, 쓸 일은 없다.
const { odd, even } = require.cache['/Users/devrexseo/Desktop/tosslab/lecture/study-node.js/section2/var.js'].exports
console.log(odd, even)