// test dataFormat
const TIME = require('./dataFormat')

const dt = new Date()
console.log('input time format: \t', dt)

console.log('self-defined output: \t', TIME.dateFormat(dt))

// using a package to format a Date object
const m = require('moment')     // use npm i moment@{Version} to install other versions
                                // use npm install to install all packages in package.json
                                // use npm uninstall to uninstall a package

                                // pacakages used during development --> npm i {package_name} -D
                                // use npm i {package_name} -g to install package globally (e.g., nrm) <- check documentation

                                // downloaded i5ting-toc to convert .md to html file

                                // require -> find package folder -> find package.json -> find path to main
                                // packages will be loaded priorly from cache
                                    // require will not execute the code in the module multiple times
                                // build-in module >> third-party module
                                    // without ./path, self-defined modules will be treated as build-in or third-party

console.log('package output: \t\t', m().format('YYYY-MM-DD HH:mm:ss'))


// to create a package
    // initialize three files: package.json, index.js, README.md
        // package.json <- "name", "version", "main": index.js, "description", "keywords", "license": "ISC"
        // index.js
            // const func1 = require('./src/func1')     <- also set module.exports in func1
            // module.exports = {...func1}