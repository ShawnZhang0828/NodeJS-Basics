const m1 = require('./module1.js')      // note this line will execute all code in module1.js
                                        // .js can be removed
                                        // m1 is actually the module.export (export) variable in that file

console.log(m1)

// console.log(m1.add(1,3))