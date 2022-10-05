const db = require('../db/index')

exports.getArticleCates = (req, res) => {
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'

    db.query(sql, (err, results) => {
        if (err) return res.cc(err)

        res.send({
            status: 0,
            message: 'Get article categories data successfully.',
            data: results
        })
    })
}

exports.addArticleCates = (req, res) => {
    const sqlStr1 = 'select * from ev_article_cate where name=? or alias=?'

    db.query(sqlStr1, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)
        
        // check if name or alias is occupied
        if (results.length === 2) return res.cc('Both name and alias are occupied, please use other ones.')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('Both name and alias are occupied, please use other ones.')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('Name has been taken, please use another one.')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('Alias has been taken, please use another one.')
        
        const sqlStr2 = 'insert into ev_article_cate set ?'

        db.query(sqlStr2, req.body, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('Add article category failed.')

            res.cc('Add article category successfully!', 0)
        })
    })
}

exports.deleteCateById = (req, res) => {
    const sql = 'update ev_article_cate set is_delete=1 where id=?'

    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('Delete article category failed.')

        res.cc('Delete article category successfully!',0)
    })
}

exports.getArtCateById = (req, res) => {
    const sql = 'select * from ev_article_cate where id=?'

    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('Invalid Id.')
        if (results[0].is_delete === 1) return res.cc('The category has been deleted.')

        res.send({
            status: 0,
            message: 'Get article category by id successfully!',
            data: results[0]
        })
    })
}

exports.updateCateById = (req, res) => {
    const sqlStr1 = 'select * from ev_article_cate where Id<>? and (name=? or alias=?)'

    db.query(sqlStr1, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)
        
        // check if name or alias is occupied
        if (results.length === 2) return res.cc('Both name and alias are occupied, please use other ones.')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('Both name and alias are occupied, please use other ones.')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('Name has been taken, please use another one.')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('Alias has been taken, please use another one.')
        
        const sqlStr2 = 'update ev_article_cate set ? where Id=?'

        db.query(sqlStr2, [req.body, req.body.Id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('Invalid Id.')

            res.cc('Update article category successfully!', 0)
        })
    })
}