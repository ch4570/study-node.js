const express = require('express')

const app = express()
const path = require('path')

app.set('port', process.env.PORT || 3000)

app.use((req,res, next)=>{
    console.log('1 요청에 실행하고 싶어요')
    // 미들웨어는 next()를 호출해야 라우터를 찾아간다.
    next()
}, (req,res,next)=>{
    throw new Error('에러가 났어요')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req, res) => {
    res.send('Hello Express!')
})

app.get('/about', (req, res) => {
    res.send('Hello Express')
})

// PathVariable 사용
app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`)
})

// 범위가 넓은 라우터는 아래에 넣어주어야 한다 -> 라우터는 위에서 아래로 실행되기 때문에
app.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.write('<h1>오늘 좀 하네</h1>')
    res.write('<script>const alertMachine = () => { \n setTimeout(() => { alert(`시간이 됬다!`) \n }, 2000) } \n')
    res.write(' \n alertMachine()')
    res.write('\n console.log(`호출 성공`) </script>')
    res.end()
})

// 404 처리 미들웨어
app.use((req, res, next) => {
    res.status(404).send('404 지롱')
})

// Error 미들웨어는 error가 파라미터로 포함되어야 한다.
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500)
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.write('<h1>몹시 웅장한에러</h1>')
    res.write(`<p>에러의 이유 = [${err}]</p>`)
    res.end()
})

app.listen(3000, () => {
    console.log('Express server started on port 3000')
})