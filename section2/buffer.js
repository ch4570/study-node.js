const buffer = Buffer.from('저를 버퍼로 바꿔보세요')

console.log('from():', buffer)
console.log('length():', buffer.length) // 버퍼의 길이 = 32byte
console.log(buffer.toString())  // 버퍼를 문자열로

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')]
console.log(Buffer.concat(array).toString()) // 버퍼를 합쳐서 문자열로 바꿔준다.

console.log(Buffer.alloc(5))  // 5byte 버퍼를 만든다.

