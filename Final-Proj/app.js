const express = require('express')
const cors = require('cors')
const joi = require('joi')
const expressJWT = require('express-jwt')
const config = require('./config')

const app = express()

app.use(cors())     // enable cross-domian resource sharing
app.use(express.urlencoded({ extended: false }))        // decode form data encoded in url

// encapsulate res.send with a middleware to simply the code
app.use((req, res, next) => {
    res.cc = (err, status=1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// decrypt the jwt token for domains without /api
app.use(expressJWT({secret: config.jwtSecretKey, algorithms: ['HS256']}).unless({path: [/^\/api/]}))

// Use User module (register and login)
const userRouter = require('./router/user')
app.use('/api', userRouter)
// Use Userinfo module (get user information)
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)
// Use artcate module (get article data)
const  artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)

app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err)
    if (err.name === 'UnauthorizedError') return res.cc('User authorization failed.')
    // unknown error occured
    res.cc(err)
})


app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007')
})