const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')     // config secret key to encrypt and decrypt jwt token

// handler for register user
exports.regUser = (req, res) => {
    const userinfo = req.body
    // if (!userinfo.username || !userinfo.password) {
    //     return res.send({
    //         status: 1,                                               <--- will be checked using Joi
    //         message: 'Illegal username or password'
    //     })
    // }

    // check if username existed or legal
    const sqlStr1 = 'select * from ev_users where username=?'
    db.query(sqlStr1, userinfo.username, (err, results) => {
        if (err) {
            // return res.send({ status: 1, message: err.message })
            return res.cc(err)
        }
        if (results.length > 0) {
            // return res.send({ status: 1, message: 'Username existed, please use another one.' })
            return res.cc('Username existed, please use another one.')
        }

        // insert username if the username is valid
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        const sqlStr2 = 'insert into ev_users set ?'
        db.query(sqlStr2, {username: userinfo.username, password: userinfo.password}, (err, results) => {
            if (err) {
                // return res.send({ status: 1, message: err.message })
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                // return res.send({status: 1, message: 'Register user failed, try again later.' })
                return res.cc('Register user failed, try again later.')
            }
            // res.send({ status: 0, message: 'Register user successfully!' })
            res.cc('Register user successfully!', 0)
        })
    })

    
}

// handler for login
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('Username does not exist.')

        // user bcrypt to check if the password is valid (since the password stored in the databased is encrypted)
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) {
            return res.cc('Invalid password. Try again.')
        }

        // generate JWT web token
        const user = {...results[0], password: '', user_pic: ''}
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })

        res.send({
            status: 0,
            message: 'Login successful',
            token: 'Bearer '+ tokenStr
        })
    })
}