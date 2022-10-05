const express = require('express')
const router = express.Router()

router.get('/user/list', (req, res) => {
    const query = req.query
    res.send({ 
        status: 0,      // 0 for success, 1 for failed
        msg: 'GET request succeeded',
        data: query
     })
})

router.post('/user/add', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST request succeeded',
        data: body
    })
})

module.exports = router

/*
    When request sender and request receiver are using different protocol rules, there might a problem with crossing domains
    npm install cors
    const cros = require('cors')
    app.use(cors()) 

    cors consists of a series of response headers that decide whether the browser allows javascript to fetch resources while crossing
    domain
    => Headers
        => Access-Control-Allow-Origin: <origin> | *
            => res.setHeader('Access-Control-Allow-Origin', '*')
        => Access-Control-Allow-Headers
            => res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')
        => Access-Control-Allow-Methods
            => res.setHeader('Access-Control-Allow-Methods', '*')   or 'PUT, DELETE'
*/