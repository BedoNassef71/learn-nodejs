const path = require('path')

// console.log(path.sep) // \ => backslash

const filePath = path.join('./content', 'myFolder', 'test.txt')
// console.log(filePath)
// console.log(path.basename(filePath))

const abs = path.resolve(__dirname, "content", "myFolder", "test.txt")
console.log(abs)

