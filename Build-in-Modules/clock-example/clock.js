// the goal of the program is to extract .css, .html, and .js from a .html file that contains all the component

const fs = require('fs')
const path = require('path')

// create regular expression to represent <style> and <script>
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// read the processed html file
fs.readFile(path.join(__dirname, '../pathToFile'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('Read html file failed')
    }
    resolveScc(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '../pathToNewFile'), newCss, function(err){
        if (err) {
            return console.log('Write html file failed')
        }
        console.log('Write html file succeeded')
    })
}

function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '../pathToNewFile'), newJS, function(err) {
        if (err) {
            return console.log('Write html file failed')
        }
        console.log('Write html file secceeded')
    })
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./pathToNewFile">').replace(regScript, '<script src="./pathToNewFile"></script>')
    fs.writeFile(path.join(__dirname, '../pathToNewFile'), newHTML, function(err) {
        if (err) {
            return console.log('Write html file failed')
        }
        console.log('Write html file secceeded')
    })
}