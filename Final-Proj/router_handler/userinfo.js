const db = require('../db/index')
const bcrypt = require('bcryptjs')

exports.getuserinfo = (req, res) => {
    const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'

    db.query(sql, req.user.id, (err , results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('User not found.')
        res.send({
            status: 0,
            message: 'Got user information successfully!',
            data: results[0]
        })
    })
}

exports.updateUserInfo = (req, res) => {
    const sql = 'update ev_users set ? where id=?'

    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('User not found.')
        res.cc('Updatea user information successfully!', 0)
    })
}

exports.updatePassword = (req, res) => {
    const sqlStr1 = 'select * from ev_users where id=?'

    db.query(sqlStr1, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('User not found.')

        // user bcrypt to check if the password is valid (since the password stored in the databased is encrypted)
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) {
            return res.cc('Invalid old password. Try again.')
        }

        // update password if the old passworld is valid
        const sqlStr2 = 'update ev_users set password=? where id=?'
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

        db.query(sqlStr2, [newPwd, req.user.id],(err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('User not found.')
            res.cc('Update password successfully!', 0)
        })
    })
}

exports.updateAvatar = (req, res) => {
    const sqlStr = 'update ev_users set user_pic=? where id=?'

    // req.body comes from the request itself, req.user comes from the decoded token (JWT)
    db.query(sqlStr, [req.body.avatar, req.user.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('User not found.')
        res.cc('Update avatar successfully!')
    })
}