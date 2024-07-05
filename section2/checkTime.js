console.time('executionTime')

const func = () => [1, 2, 3, 4].forEach(number => console.log(`Number = ${number}`))
func()

console.timeEnd('executionTime')