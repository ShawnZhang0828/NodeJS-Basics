const path = require('path')

// JOIN
// ../ will remove the previous folder
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)

// use path.join(__dirname, './currentPath')

// BASENAME
// pass in the full path (and the extension), return the most inner file
// passing in the extension will remove the .extension in the return value

// EXTNAME
// pass in the full path, return .extension (e.g., .html)