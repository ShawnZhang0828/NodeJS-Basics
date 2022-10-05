const express = require('express')
const bp = require('./custom-body-parser')

const app = express()

// app.get('/user', (req, res) => {
//     // res.send({ name: 'Amujue', age: 20, gender: 'male' })
//     res.send(req.query)
//     console.log(req.query)
// })

// app.get('/user/:id/:password', (req, res) => {        // : is necessary
//     console.log(req.params)         // dynamic parameters
//     res.send(req.params)
// })

// app.post('/user', (req, res) => {
//     res.send('Yeeee~~')
// })

// app.use(express.static('{directory_path}'))     -> makes files in directory available via http://127.0.0.1/users/{filePath}
// ^ call this multiple times to make more directories available
// app.use('/public', express.static('{directory_path}'))   -> files are then available via http://127.0.0.1/users/public/{filePath}

// MIDDLEWARE (existence of next)
// Note definition comes before app.get()
// GET -> MIDDLEWARE1 -> MIDDLEWARE2 -> FUNCTION IN GET
app.use((req, res, next) => {
    console.log('Processing through first middleware...')
    const time = Date()
    req.startTime = time
    next()
})
app.use((req, res, next) => {
    console.log('Processing through second middleware...')
    next()
})
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bp)     // perform the same operation as the two commented line above, but its customized

// USE A MODULIZED ROUTER
const router = require('./router')
// app.use(router)
app.use('/api', router)        // make /api required for requesting the router

// if we define a middleware variable, then pass it to app.get('path', {middleware_var}, (req, res) => {}). in this way,
// the middleware is only locally effective (i.e., it won't affect other routers)
// for multiple middlewares, app.get('path', [mw1, mw2, mw3], (req, res) => {}), where the [] is optional

// Five types of middlewares
    // Application-level middleware (globally/locally effective middleware)
    // Router-level middleware (middlewares that are connected to a router object)
    // Error-handling middleware ((err, req, res, next) => {}  used to avoid server crashing due to errors)
        // needs to be registered after all routers
    // Built-in middleware
    // Third-party middleware (use npm install and require to import the middlewares)

app.get('/', (req, res) => {
    res.send('Home Page.' + ' Request time: ' + req.startTime)
})

app.post('/user', (req, res) => {
    console.log(req.body)       // body used when long json request
                                // query used when looking certain information, etc.
                                // params used when a dynamic variable used in url (i.e., :)
    res.send(req.body)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})