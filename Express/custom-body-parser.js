const qs = require('querystring')

bodyParser = (req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk            // data may be divided to pieces and sent multiple times
    })
    req.on('end', () => {
        // console.log(str)        // data should be restored now
        const body = qs.parse(str)
        req.body = body
        next()
    })
}

module.exports = bodyParser