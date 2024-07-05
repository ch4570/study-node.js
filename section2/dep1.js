// 순환 참조시 node.js는 module.exports 한 객체를 {} 빈 객체로 만든다.
require('./dep2')

module.exports = {
    hello : 'Hello Dev Seo Rex'
}