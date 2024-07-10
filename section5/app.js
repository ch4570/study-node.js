// dotenv는 프로젝트 최상단에 올리는 것이 좋다.
const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require("express");
const session = require('express-session');
const multer = require('multer')
const fs = require('fs');
const app = express()

app.set('port', process.env.PORT || 3000)

try {
    fs.readdirSync('uploads')
} catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.')
    fs.mkdirSync('uploads')
}

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            // done 함수는 첫 번째 인자가 에러 처리를 위한 미들웨어가 들어가므로 null을 보통 넣는다.
            done(null, 'uploads/')
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext) + Date.now() + ext)
        }
    }),
    limits: { fileSize : 5 * 1024 * 1024 }
})

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'))
})

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file)
    res.send('OK')
})

app.use(morgan('dev'))
// 정적 파일의 위치가 요청과 다른 곳에 있을 경우 유용하다 -> 보안에도 좋다(클라이언트가 서버의 구조를 알기 어렵기 때문에)
app.use('/', (req, res, next) => {
    if (req.session.id) {
        express.static(path.join(__dirname + 'public'))
    } else {
        next()
    }
})
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'rex',
    cookie: {
        httpOnly: true,
    },
    // 기본 값이다.
    name: 'connect.sid'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))   // true면 qs, false면 querystring 사용
app.use(multer().array())

// Binary Data 등을 다룰 때 사용하지만 잘 안쓴다.
app.use(bodyParser.raw())
app.use(bodyParser.text())

app.use((req,res, next)=>{
    console.log('1 요청에 실행하고 싶어요')
    // 미들웨어는 next()를 호출해야 라우터를 찾아간다.
    next()
}, (req,res,next)=>{
    try {
        // console.log(adsfasdfasdfasdf)
        next()
    } catch (error) {
        next(error)
    }
})

app.get('/', (req, res) => {
    req.cookies
    req.signedCookies
    res.cookie('name', encodeURIComponent('Dev Rex Seo'), {
        expires : new Date(),
        httpOnly: true,
        path : '/'
    })
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/json', (req, res) => {
    // res.setHeader("Content-Type", "application/json")
    // res.end(JSON.stringify({name : "rex"}))

    // setHeader() + end() 한 번에 처리
    res.json({name : "rex"})
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