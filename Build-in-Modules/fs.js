const fs = require('fs')

// READ A FILE  
fs.readFile('file11.txt', 'utf8', function(err, dataStr)
{
    if (err) {
        return console.log("Reading failed. Error message: " + err.message)
    } 

    console.log(dataStr)
})

console.log("Hello Node.js")

// WRITE A FILE
// fs.writeFile('file1.txt', 'something to write', 'utf8', function(err) {
//     if (err) {
//         return console.log("Writing failed. Error message: " + err.message)
//     }
//     console.log('write file success')
// })

// WORKING EXAMPLE
fs.readFile('file1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log("Reading failed. Error message: " + err.message)
    }

    console.log(dataStr)

    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '))
    })
    
    fs.writeFile('file1.txt', arrNew.join('\r\n'), 'utf8', function(err){})

})

// Sometimes there are problems when using relative path since the path after ./ is joint to the folder where node command is called
// to fix that issue --> use __dirname

