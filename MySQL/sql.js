// SQL
    // database -> table -> row -> field

const mysql =  require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})


// query the database (results contain an array)        comment multiple lines -> shift + alt + a
/* const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
     if (err) return console.log(err.message)
     console.log(results)
})  
 */


// insert a row in the table (results contain an object)
/* const user = {username: 'James', password: 'Gigigigigi'}
const sqlStr = 'insert into users (username, password) values (?, ?)'
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {console.log('Inserted data successfully!')}
}) */
// ------------- AN EASIER WAY -------------
/* const user = {username: 'Yannis', password: 'Greeeeek'}
const sqlStr = 'insert into users set ?'
db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {console.log('Inserted data successfully!')}
}) */


// update values in a row
/* const user = {id: 7, username: 'Skyler2', password: 'ppppp2'}
const sqlStr = 'update users set username=?, password=? where id=?'
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {console.log('Update data successfully!')}
}) */
// ------------- AN EASIER WAY -------------
/* const user = {id: 7, username: 'Skyler3', password: 'ppppp3'}
const sqlStr = 'update users set ? where id=?'
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {console.log('Update data successfully!')}
}) */

// delete data of a row
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 4, (err, results) => {                     // place multiple placeholders in an array, leave one placeholder alone 
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {console.log('Delete data successfully!')}
}) */


// since deleting the row from the table is too riskful, we set status to be 1 to mark the row to be "deleted"
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 3], (err, results) => {                     // place multiple placeholders in an array, leave one placeholder alone 
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {console.log('"Delete" data successfully!')}
})