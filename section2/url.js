const url = require('url');

const myUrl = new URL('https://www.naver.com')

console.log('new URL():', myUrl)
console.log('url.format():', url.format(myUrl))