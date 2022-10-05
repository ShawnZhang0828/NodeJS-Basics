console.log("Another file imported this module")
console.log(module.exports)

module.exports.add = function(a,b) {
    return a+b
}

exports.name = "Shawn"

console.log(module.exports === exports)