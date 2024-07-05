const fs = require('fs').promises

// async function으로 더 깔끔하게 정리할 수 있다.
async function main() {
    let data = await fs.readFile('./readme.txt')
    console.log('1번', data.toString())

    data = await fs.readFile('./readme.txt')
    console.log('2번', data.toString())

    data = await fs.readFile('./readme.txt')
    console.log('3번', data.toString())

    data = await fs.readFile('./readme.txt')
    console.log('4번', data.toString())
}

// main()

// 백그라운드로 보내지는 작업이므로, 순서대로 실행되지 않는다 -> 실행 할때마다 다른 결과가 나옴
fs.readFile('./readme.txt')
    .then((data) => {
        console.log('1번', data.toString())
        return fs.readFile('./readme.txt')
    })
    .then((data) => {
        console.log('2번', data.toString())
        return fs.readFile('./readme.txt')
    })
    .then((data) => {
        console.log('3번', data.toString())
        return fs.readFile('./readme.txt')
    })
    .then((data) => {
        console.log('4번', data.toString())
        return fs.readFile('./readme.txt')
    })
